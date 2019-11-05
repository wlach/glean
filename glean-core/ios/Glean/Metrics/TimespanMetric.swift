/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Foundation

/// This implements the developer facing API for recording timespan metrics.
///
/// Instances of this class type are automatically generated by the parsers at build time,
/// allowing developers to record values that were previously registered in the metrics.yaml file.
///
/// The timespan API only exposes the `TimespanMetricType.start()`, `TimespanMetricType.stop()`
/// and `TimespanMetricType.cancel()`  methods.
public class TimespanMetricType {
    let handle: UInt64
    let disabled: Bool
    let sendInPings: [String]

    /// The public constructor used by automatically generated metrics.
    public init(
        category: String,
        name: String,
        sendInPings: [String],
        lifetime: Lifetime,
        disabled: Bool,
        timeUnit: TimeUnit = .minute
    ) {
        self.disabled = disabled
        self.sendInPings = sendInPings
        self.handle = withArrayOfCStrings(sendInPings) { pingArray in
            glean_new_timespan_metric(
                category,
                name,
                pingArray,
                Int32(sendInPings.count),
                lifetime.rawValue,
                disabled.toByte(),
                timeUnit.rawValue
            )
        }
    }

    /// Destroy this metric.
    deinit {
        if self.handle != 0 {
            glean_destroy_timespan_metric(self.handle)
        }
    }

    /// Start tracking time for the provided metric.
    /// This records an error if it’s already tracking time (i.e. start was already
    /// called with no corresponding `stop()`): in that case the original
    /// start time will be preserved.
    public func start() {
        guard !self.disabled else { return }

        let startTime = timestampNanos()

        Dispatchers.shared.launchAPI {
            glean_timespan_set_start(Glean.shared.handle, self.handle, startTime)
        }
    }

    /// Stop tracking time for the provided metric.
    /// Sets the metric to the elapsed time, but does not overwrite an already
    /// existing value.
    /// This will record an error if no `start()` was called or there is an already
    /// existing value.
    public func stop() {
        guard !self.disabled else { return }

        let stopTime = timestampNanos()

        Dispatchers.shared.launchAPI {
            glean_timespan_set_stop(Glean.shared.handle, self.handle, stopTime)
        }
    }

    /// Abort a previous `start()` call. No error is recorded if no `start()` was called.
    public func cancel() {
        guard !self.disabled else { return }

        Dispatchers.shared.launchAPI {
            glean_timespan_cancel(self.handle)
        }
    }

    /// Explicitly set the timespan value, in nanoseconds.
    ///
    /// This API should only be used if your library or application requires recording
    /// times in a way that can not make use of `start()` / `stop()` / `cancel()`.
    ///
    /// `setRawNanos` does not overwrite a running timer or an already existing value.
    ///
    /// - parameters:
    ///     * elapsedNanos: The elapsed time to record, in nanoseconds.
    public func setRawNanos(_ elapsedNanos: UInt64) {
        guard !self.disabled else { return }

        Dispatchers.shared.launchAPI {
            glean_timespan_set_raw_nanos(Glean.shared.handle, self.handle, elapsedNanos)
        }
    }

    /// Tests whether a value is stored for the metric for testing purposes only. This function will
    /// attempt to await the last task (if any) writing to the the metric's storage engine before
    /// returning a value.
    ///
    /// - parameters:
    ///     * pingName: represents the name of the ping to retrieve the metric for.
    ///                 Defaults to the first value in `sendInPings`.
    /// - returns: true if metric value exists, otherwise false
    func testHasValue(_ pingName: String? = nil) -> Bool {
        Dispatchers.shared.assertInTestingMode()

        let pingName = pingName ?? self.sendInPings[0]
        return glean_timespan_test_has_value(Glean.shared.handle, self.handle, pingName) != 0
    }

    /// Returns the stored value for testing purposes only. This function will attempt to await the
    /// last task (if any) writing to the the metric's storage engine before returning a value.
    ///
    /// Throws a "Missing value" exception if no value is stored
    ///
    /// - parameters:
    ///     * pingName: represents the name of the ping to retrieve the metric for.
    ///                 Defaults to the first value in `sendInPings`.
    ///
    /// - returns:  value of the stored metric
    func testGetValue(_ pingName: String? = nil) throws -> UInt64 {
        Dispatchers.shared.assertInTestingMode()

        let pingName = pingName ?? self.sendInPings[0]

        if !testHasValue(pingName) {
            throw "Missing value"
        }

        return glean_timespan_test_get_value(Glean.shared.handle, self.handle, pingName)
    }

    /// Returns the number of errors recorded for the given metric.
    ///
    /// - parameters:
    ///     * errorType: The type of error recorded.
    ///     * pingName: represents the name of the ping to retrieve the metric for.
    ///                 Defaults to the first value in `sendInPings`.
    ///
    /// - returns: The number of errors recorded for the metric for the given error type.
    func testGetNumRecordedErrors(_ errorType: ErrorType, pingName: String? = nil) -> Int32 {
        Dispatchers.shared.assertInTestingMode()

        let pingName = pingName ?? self.sendInPings[0]

        return glean_timespan_test_get_num_recorded_errors(
            Glean.shared.handle,
            self.handle,
            errorType.rawValue,
            pingName
        )
    }
}
