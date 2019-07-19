var N=null,E="",T="t",U="u",searchIndex={};
var R=["string","commonmetricdata","option","glean","test_get_value","Test-only API (exported for FFI purposes).","Public facing API for setting the metric to a date/time…","datetime","result","test_get_value_as_json_string","timeunit","duration","set_start","Start tracking time for the provided metric.","timerid","histogram","Set to the specified value.","should_record","category","glean_core","jsonvalue","Collect a snapshot for the given ping from storage and…","pingtype","Snapshot the given store and optionally clear it.","database","snapshot","hashmap","to_string","try_from","try_into","borrow_mut","type_id","to_owned","clone_into","borrow","typeid","glean_core::metrics","dataerror","to_bytes","glean_core::ping","glean_core::storage","meta_mut","default","lifetime","labeledmetric","errorkind","formatter","serialize","deserialize","backtrace","CommonMetricData","Lifetime","ErrorType","PingType","TimeUnit","BooleanMetric","CounterMetric","DatetimeMetric","EventMetric","LabeledMetric","StringMetric","StringListMetric","TimespanMetric","TimingDistributionMetric","UuidMetric","MetricType","PingMaker","StorageManager","ffistr"];
searchIndex["glean_core"]={"doc":"Glean is a modern approach for recording and sending…","i":[[3,R[50],R[19],"The common set of data shared across all different metric…",N,N],[12,"name",E,"The metric's name.",0,N],[12,R[18],E,"The metric's category.",0,N],[12,"send_in_pings",E,"List of ping names to include this metric in.",0,N],[12,R[43],E,"The metric's lifetime.",0,N],[12,"disabled",E,"Whether or not the metric is disabled.",0,N],[3,"Error",E,"A specialized [`Error`] type for this crate's operations.",N,N],[3,"Glean",E,"The object holding meta information about a Glean instance.",N,N],[4,R[51],E,"The supported metrics' lifetimes.",N,N],[13,"Ping",E,"The metric is reset with each sent ping",1,N],[13,"Application",E,"The metric is reset on application restart",1,N],[13,"User",E,"The metric is reset with each user profile",1,N],[4,R[52],E,"The possible error types for metric recording.",N,N],[13,"InvalidValue",E,"For when the value to be recorded does not match the…",2,N],[13,"InvalidLabel",E,"For when the label of a labeled metric does not match the…",2,N],[5,"test_get_num_recorded_errors",E,"Get the number of recorded errors for the given metric and…",N,[[["errortype"],[R[3]],[R[2],["str"]],["str"],[R[1]]],[[R[8],["i32",R[0]]],[R[0]],["i32"]]]],[11,"as_str",E,"String representation of the lifetime.",1,[[],["str"]]],[11,"new",E,"Create a new metadata object.",0,[[[R[0]],["into",[R[0]]]],[R[1]]]],[11,"identifier",E,"The metric's unique identifier.",0,[[["self"]],[R[0]]]],[11,R[17],E,"Whether this metric should be recorded.",0,[[["self"]],["bool"]]],[11,"storage_names",E,"The list of storages this metric should be recorded into.",0,[[["self"]]]],[11,"kind",E,"Access the [`ErrorKind`] member.",3,[[["self"]],[R[45]]]],[11,"utf8_error",E,"Return a new UTF-8 error",3,[[],["error"]]],[11,R[27],E,"The error type's metric name",2,[[["self"]],["str"]]],[0,"metrics",E,"The different metric types supported by the Glean SDK to…",N,N],[3,R[55],R[36],"A boolean metric.",N,N],[3,R[56],E,"A counter metric.",N,N],[3,R[57],E,"A datetime metric.",N,N],[3,R[58],E,"An event metric.",N,N],[3,R[59],E,"A labeled metric.",N,N],[3,R[53],E,"Stores information about a ping.",N,N],[12,"name",E,"The name of the ping.",4,N],[12,"include_client_id",E,"Whether the ping should include the client ID.",4,N],[3,R[60],E,"A string metric.",N,N],[3,R[61],E,"A string list metric.",N,N],[3,R[62],E,"A timespan metric.",N,N],[3,R[63],E,"A timing distribution metric.",N,N],[3,R[64],E,"An UUID metric.",N,N],[4,R[54],E,"Different resolutions supported by the time related metric…",N,N],[13,"Nanosecond",E,"Truncate to nanosecond precision.",5,N],[13,"Microsecond",E,"Truncate to microsecond precision.",5,N],[13,"Millisecond",E,"Truncate to millisecond precision.",5,N],[13,"Second",E,"Truncate to second precision.",5,N],[13,"Minute",E,"Truncate to minute precision.",5,N],[13,"Hour",E,"Truncate to hour precision.",5,N],[13,"Day",E,"Truncate to day precision.",5,N],[4,"Metric",E,"The available metrics.",N,N],[13,"Boolean",E,"A boolean metric. See `BooleanMetric` for more information.",6,N],[13,"Counter",E,"A counter metric. See `CounterMetric` for more information.",6,N],[13,"Datetime",E,"A datetime metric. See `DatetimeMetric` for more…",6,N],[13,"Experiment",E,"An experiment metric. See `ExperimentMetric` for more…",6,N],[13,"String",E,"A string metric. See `StringMetric` for more information.",6,N],[13,"StringList",E,"A string list metric. See `StringListMetric` for more…",6,N],[13,"Uuid",E,"A UUID metric. See `UuidMetric` for more information.",6,N],[13,"Timespan",E,"A timespan metric. See `TimespanMetric` for more…",6,N],[13,"TimingDistribution",E,"A timing distribution. See `TimingDistributionMetric` for…",6,N],[11,"new",E,"Create a new boolean metric.",7,[[[R[1]]],["self"]]],[11,"set",E,"Set to the specified boolean value.",7,[[["bool"],["self"],[R[3]]]]],[11,R[4],E,R[5],7,[[["str"],["self"],[R[3]]],[["bool"],[R[2],["bool"]]]]],[11,"new",E,"Create a new counter metric.",8,[[[R[1]]],["self"]]],[11,"add",E,"Increase the counter by `amount`.",8,[[["i32"],["self"],[R[3]]]]],[11,R[4],E,R[5],8,[[["str"],["self"],[R[3]]],[[R[2],["i32"]],["i32"]]]],[11,"new",E,"Create a new datetime metric.",9,[[[R[10]],[R[1]]],["self"]]],[11,"set_with_details",E,R[6],9,[[["u32"],["i32"],["self"],[R[3]]]]],[11,"set",E,R[6],9,[[[R[2],[R[7]]],["self"],[R[7],["fixedoffset"]],[R[3]]]]],[11,"test_get_value_as_string",E,R[5],9,[[["str"],["self"],[R[3]]],[[R[2],[R[0]]],[R[0]]]]],[11,"new",E,"Create a new event metric.",10,[[[R[0]],["vec",[R[0]]],[R[1]]],["self"]]],[11,"record",E,"Record an event.",10,[[[R[2],[R[26]]],["into",[R[2]]],["self"],["u64"],[R[3]]]]],[11,"test_has_value",E,R[5],10,[[["str"],["self"],[R[3]]],["bool"]]],[11,R[4],E,R[5],10,[[["str"],["self"],[R[3]]],[[R[2],["vec"]],["vec",["recordedeventdata"]]]]],[11,R[9],E,R[5],10,[[["str"],["self"],[R[3]]],[R[0]]]],[11,"new",E,"Create a new labeled metric from the given metric instance…",11,[[[R[2],["vec"]],[T],["vec",[R[0]]]],[R[44]]]],[11,"get",E,"Get a specific metric for a given label.",11,[[["self"],["str"],[R[3]]],[T]]],[11,"new",E,"Create a new ping type for the given name and whether to…",4,[[[R[0]],["into",[R[0]]],["bool"]],["self"]]],[11,"send",E,"Send the ping.",4,[[["bool"],["self"],[R[3]]],[[R[8],["bool"]],["bool"]]]],[11,"new",E,"Create a new string metric.",12,[[[R[1]]],["self"]]],[11,"set",E,R[16],12,[[[R[0]],["self"],["into",[R[0]]],[R[3]]]]],[11,R[4],E,R[5],12,[[["str"],["self"],[R[3]]],[[R[2],[R[0]]],[R[0]]]]],[11,"new",E,"Create a new string list metric.",13,[[[R[1]]],["self"]]],[11,"add",E,"Add a new string to the list.",13,[[[R[0]],["self"],["into",[R[0]]],[R[3]]]]],[11,"set",E,"Set to a specific list of strings.",13,[[[R[0]],["vec",[R[0]]],["self"],[R[3]]]]],[11,R[4],E,R[5],13,[[["str"],["self"],[R[3]]],[[R[2],["vec"]],["vec",[R[0]]]]]],[11,R[9],E,R[5],13,[[["str"],["self"],[R[3]]],[[R[2],[R[0]]],[R[0]]]]],[11,"format_pattern",E,"How to format the given TimeUnit, truncating the time if…",5,[[],["str"]]],[11,"duration_convert",E,"Convert a duration to the requested time unit.",5,[[[R[11]]],["u64"]]],[11,"new",E,"Create a new timespan metric.",14,[[[R[10]],[R[1]]],["self"]]],[11,R[12],E,R[13],14,[[["self"],["u64"],[R[3]]]]],[11,"set_stop",E,"Stop tracking time for the provided metric. Sets the…",14,[[["self"],["u64"],[R[3]]]]],[11,"cancel",E,"Abort a previous `start` call. No error is recorded if no…",14,[[["self"]]]],[11,"set_raw",E,"Explicitly set the timespan value.",14,[[["bool"],[R[11]],["self"],[R[3]]]]],[11,R[4],E,R[5],14,[[["str"],["self"],[R[3]]],[[R[2],["u64"]],["u64"]]]],[11,"new",E,"Create a new timing distribution metric.",15,[[[R[10]],[R[1]]],["self"]]],[11,R[12],E,R[13],15,[[["self"],["u64"],[R[3]]],[R[14]]]],[11,"set_stop_and_accumulate",E,"Stop tracking time for the provided metric and associated…",15,[[["self"],[R[14]],["u64"],[R[3]]]]],[11,"cancel",E,"Abort a previous [start] call. No error is recorded if no…",15,[[["self"],[R[14]]]]],[11,R[4],E,R[5],15,[[["str"],["self"],[R[3]]],[[R[15]],[R[2],[R[15]]]]]],[11,R[9],E,R[5],15,[[["str"],["self"],[R[3]]],[[R[2],[R[0]]],[R[0]]]]],[11,"new",E,"Create a new UUID metric",16,[[[R[1]]],["self"]]],[11,"set",E,R[16],16,[[["self"],["uuid"],[R[3]]]]],[11,"generate_and_set",E,"Generate a new random UUID and set the metric to it.",16,[[["self"],[R[3]]],["uuid"]]],[11,R[4],E,R[5],16,[[["str"],["self"],[R[3]]],[[R[2],[R[0]]],[R[0]]]]],[6,"TimerId",E,"Identifier for a running timer.",N,N],[8,R[65],E,"A `MetricType` describes common behavior across all metrics.",N,N],[10,"meta",E,"Access the stored metadata",17,[[["self"]],[R[1]]]],[10,R[41],E,"Access the stored metadata mutable",17,[[["self"]],[R[1]]]],[11,R[17],E,"Whether this metric should currently be recorded",17,[[["self"],[R[3]]],["bool"]]],[11,R[18],E,"The category the metric fits into.",6,[[["self"]],["str"]]],[11,"as_json",E,"The JSON representation of the metric's data",6,[[["self"]],[R[20]]]],[0,"ping",R[19],"Ping collection, assembly & submission.",N,N],[3,R[66],R[39],"Collect a ping's data, assemble it into its full payload…",N,N],[11,"new",E,"Create a new PingMaker.",18,[[],["self"]]],[11,"collect",E,R[21],18,[[["self"],[R[22]],[R[3]]],[[R[20]],[R[2],[R[20]]]]]],[11,"collect_string",E,R[21],18,[[["self"],[R[22]],[R[3]]],[[R[2],[R[0]]],[R[0]]]]],[11,"store_ping",E,"Store a ping to disk in the pings directory.",18,[[["path"],[R[20]],["str"],["self"]],[R[8]]]],[11,"clear_pending_pings",E,"Clear any pending pings in the queue.",18,[[["path"],["self"]],[R[8]]]],[0,"storage",R[19],"Storage snapshotting.",N,N],[3,R[67],R[40],"Snapshot metrics from the underlying database.",N,N],[11,R[25],E,R[23],19,[[["str"],["self"],[R[24]],["bool"]],[[R[2],[R[0]]],[R[0]]]]],[11,"snapshot_as_json",E,R[23],19,[[["str"],["self"],[R[24]],["bool"]],[[R[20]],[R[2],[R[20]]]]]],[11,"snapshot_metric",E,"Get the current value of a single metric identified by name.",19,[[["str"],["self"],[R[24]]],[[R[2],["metric"]],["metric"]]]],[11,"snapshot_experiments_as_json",E,"Snapshot the experiments.",19,[[["self"],[R[24]],["str"]],[[R[20]],[R[2],[R[20]]]]]],[6,"Result",R[19],"A specialized [`Result`] type for this crate's operations.",N,N],[11,"new",E,"Create and initialize a new Glean object.",20,[[["bool"],["str"]],[R[8]]]],[11,"on_ready_to_send_pings",E,"Called when Glean is initialized to the point where it can…",20,[[["self"]]]],[11,"set_upload_enabled",E,"Set whether upload is enabled or not.",20,[[["self"],["bool"]],["bool"]]],[11,"is_upload_enabled",E,"Determine whether upload is enabled.",20,[[["self"]],["bool"]]],[11,"get_application_id",E,"Get the application ID as specified on instantiation.",20,[[["self"]],["str"]]],[11,"get_data_path",E,"Get the data path of this instance.",20,[[["self"]],["path"]]],[11,"storage",E,"Get a handle to the database.",20,[[["self"]],[R[24]]]],[11,"event_storage",E,"Get a handle to the event database.",20,[[["self"]],["eventdatabase"]]],[11,"get_max_events",E,"Get the maximum number of events to store before sending a…",20,[[["self"]],["usize"]]],[11,R[25],E,"Take a snapshot for the given store and optionally clear it.",20,[[["self"],["bool"],["str"]],[R[0]]]],[11,"send_ping",E,"Send a ping.",20,[[["self"],[R[22]],["bool"]],[[R[8],["bool"]],["bool"]]]],[11,"send_ping_by_name",E,"Send a ping by name.",20,[[["bool"],["self"],["str"]],[[R[8],["bool"]],["bool"]]]],[11,"get_ping_by_name",E,"Get a `PingType` by name.",20,[[["self"],["str"]],[[R[22]],[R[2],[R[22]]]]]],[11,"register_ping_type",E,"Register a new `PingType`.",20,[[["self"],[R[22]]]]],[11,"set_experiment_active",E,"Indicate that an experiment is running. Glean will then…",20,[[[R[0]],[R[2],[R[26]]],["self"],[R[26],[R[0],R[0]]]]]],[11,"set_experiment_inactive",E,"Indicate that an experiment is no longer running.",20,[[["self"],[R[0]]]]],[11,"test_is_experiment_active",E,R[5],20,[[["self"],[R[0]]],["bool"]]],[11,"test_get_experiment_data_as_json",E,R[5],20,[[["self"],[R[0]]],[[R[2],[R[0]]],[R[0]]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[32],E,E,0,[[["self"]],[T]]],[11,R[33],E,E,0,[[[T],["self"]]]],[11,R[28],E,E,0,[[[U]],[R[8]]]],[11,R[29],E,E,0,[[],[R[8]]]],[11,R[30],E,E,0,[[["self"]],[T]]],[11,R[34],E,E,0,[[["self"]],[T]]],[11,R[31],E,E,0,[[["self"]],[R[35]]]],[11,R[27],E,E,3,[[["self"]],[R[0]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[28],E,E,3,[[[U]],[R[8]]]],[11,R[29],E,E,3,[[],[R[8]]]],[11,R[30],E,E,3,[[["self"]],[T]]],[11,R[34],E,E,3,[[["self"]],[T]]],[11,R[31],E,E,3,[[["self"]],[R[35]]]],[11,"as_fail",E,E,3,[[["self"]],["fail"]]],[11,"from",E,E,20,[[[T]],[T]]],[11,"into",E,E,20,[[],[U]]],[11,R[28],E,E,20,[[[U]],[R[8]]]],[11,R[29],E,E,20,[[],[R[8]]]],[11,R[30],E,E,20,[[["self"]],[T]]],[11,R[34],E,E,20,[[["self"]],[T]]],[11,R[31],E,E,20,[[["self"]],[R[35]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[32],E,E,1,[[["self"]],[T]]],[11,R[33],E,E,1,[[[T],["self"]]]],[11,R[28],E,E,1,[[[U]],[R[8]]]],[11,R[29],E,E,1,[[],[R[8]]]],[11,R[30],E,E,1,[[["self"]],[T]]],[11,R[34],E,E,1,[[["self"]],[T]]],[11,R[31],E,E,1,[[["self"]],[R[35]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[28],E,E,2,[[[U]],[R[8]]]],[11,R[29],E,E,2,[[],[R[8]]]],[11,R[30],E,E,2,[[["self"]],[T]]],[11,R[34],E,E,2,[[["self"]],[T]]],[11,R[31],E,E,2,[[["self"]],[R[35]]]],[11,"from",R[36],E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[32],E,E,7,[[["self"]],[T]]],[11,R[33],E,E,7,[[[T],["self"]]]],[11,R[28],E,E,7,[[[U]],[R[8]]]],[11,R[29],E,E,7,[[],[R[8]]]],[11,R[30],E,E,7,[[["self"]],[T]]],[11,R[34],E,E,7,[[["self"]],[T]]],[11,R[31],E,E,7,[[["self"]],[R[35]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[32],E,E,8,[[["self"]],[T]]],[11,R[33],E,E,8,[[[T],["self"]]]],[11,R[28],E,E,8,[[[U]],[R[8]]]],[11,R[29],E,E,8,[[],[R[8]]]],[11,R[30],E,E,8,[[["self"]],[T]]],[11,R[34],E,E,8,[[["self"]],[T]]],[11,R[31],E,E,8,[[["self"]],[R[35]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[28],E,E,9,[[[U]],[R[8]]]],[11,R[29],E,E,9,[[],[R[8]]]],[11,R[30],E,E,9,[[["self"]],[T]]],[11,R[34],E,E,9,[[["self"]],[T]]],[11,R[31],E,E,9,[[["self"]],[R[35]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[32],E,E,10,[[["self"]],[T]]],[11,R[33],E,E,10,[[[T],["self"]]]],[11,R[28],E,E,10,[[[U]],[R[8]]]],[11,R[29],E,E,10,[[],[R[8]]]],[11,R[30],E,E,10,[[["self"]],[T]]],[11,R[34],E,E,10,[[["self"]],[T]]],[11,R[31],E,E,10,[[["self"]],[R[35]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[],[U]]],[11,R[32],E,E,11,[[["self"]],[T]]],[11,R[33],E,E,11,[[[T],["self"]]]],[11,R[28],E,E,11,[[[U]],[R[8]]]],[11,R[29],E,E,11,[[],[R[8]]]],[11,R[30],E,E,11,[[["self"]],[T]]],[11,R[34],E,E,11,[[["self"]],[T]]],[11,R[31],E,E,11,[[["self"]],[R[35]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[32],E,E,4,[[["self"]],[T]]],[11,R[33],E,E,4,[[[T],["self"]]]],[11,R[28],E,E,4,[[[U]],[R[8]]]],[11,R[29],E,E,4,[[],[R[8]]]],[11,R[30],E,E,4,[[["self"]],[T]]],[11,R[34],E,E,4,[[["self"]],[T]]],[11,R[31],E,E,4,[[["self"]],[R[35]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[],[U]]],[11,R[32],E,E,12,[[["self"]],[T]]],[11,R[33],E,E,12,[[[T],["self"]]]],[11,R[28],E,E,12,[[[U]],[R[8]]]],[11,R[29],E,E,12,[[],[R[8]]]],[11,R[30],E,E,12,[[["self"]],[T]]],[11,R[34],E,E,12,[[["self"]],[T]]],[11,R[31],E,E,12,[[["self"]],[R[35]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[32],E,E,13,[[["self"]],[T]]],[11,R[33],E,E,13,[[[T],["self"]]]],[11,R[28],E,E,13,[[[U]],[R[8]]]],[11,R[29],E,E,13,[[],[R[8]]]],[11,R[30],E,E,13,[[["self"]],[T]]],[11,R[34],E,E,13,[[["self"]],[T]]],[11,R[31],E,E,13,[[["self"]],[R[35]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[],[U]]],[11,R[28],E,E,14,[[[U]],[R[8]]]],[11,R[29],E,E,14,[[],[R[8]]]],[11,R[30],E,E,14,[[["self"]],[T]]],[11,R[34],E,E,14,[[["self"]],[T]]],[11,R[31],E,E,14,[[["self"]],[R[35]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[28],E,E,15,[[[U]],[R[8]]]],[11,R[29],E,E,15,[[],[R[8]]]],[11,R[30],E,E,15,[[["self"]],[T]]],[11,R[34],E,E,15,[[["self"]],[T]]],[11,R[31],E,E,15,[[["self"]],[R[35]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[],[U]]],[11,R[32],E,E,16,[[["self"]],[T]]],[11,R[33],E,E,16,[[[T],["self"]]]],[11,R[28],E,E,16,[[[U]],[R[8]]]],[11,R[29],E,E,16,[[],[R[8]]]],[11,R[30],E,E,16,[[["self"]],[T]]],[11,R[34],E,E,16,[[["self"]],[T]]],[11,R[31],E,E,16,[[["self"]],[R[35]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[32],E,E,5,[[["self"]],[T]]],[11,R[33],E,E,5,[[[T],["self"]]]],[11,R[28],E,E,5,[[[U]],[R[8]]]],[11,R[29],E,E,5,[[],[R[8]]]],[11,R[30],E,E,5,[[["self"]],[T]]],[11,R[34],E,E,5,[[["self"]],[T]]],[11,R[31],E,E,5,[[["self"]],[R[35]]]],[11,R[38],E,E,5,[[["self"]],[[R[8],["vec",R[37]]],[R[37]],["vec",["u8"]]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[32],E,E,6,[[["self"]],[T]]],[11,R[33],E,E,6,[[[T],["self"]]]],[11,R[28],E,E,6,[[[U]],[R[8]]]],[11,R[29],E,E,6,[[],[R[8]]]],[11,R[30],E,E,6,[[["self"]],[T]]],[11,R[34],E,E,6,[[["self"]],[T]]],[11,R[31],E,E,6,[[["self"]],[R[35]]]],[11,R[38],E,E,6,[[["self"]],[[R[8],["vec",R[37]]],[R[37]],["vec",["u8"]]]]],[11,"from",R[39],E,18,[[[T]],[T]]],[11,"into",E,E,18,[[],[U]]],[11,R[28],E,E,18,[[[U]],[R[8]]]],[11,R[29],E,E,18,[[],[R[8]]]],[11,R[30],E,E,18,[[["self"]],[T]]],[11,R[34],E,E,18,[[["self"]],[T]]],[11,R[31],E,E,18,[[["self"]],[R[35]]]],[11,"from",R[40],E,19,[[[T]],[T]]],[11,"into",E,E,19,[[],[U]]],[11,R[28],E,E,19,[[[U]],[R[8]]]],[11,R[29],E,E,19,[[],[R[8]]]],[11,R[30],E,E,19,[[["self"]],[T]]],[11,R[34],E,E,19,[[["self"]],[T]]],[11,R[31],E,E,19,[[["self"]],[R[35]]]],[11,"meta",R[36],E,7,[[["self"]],[R[1]]]],[11,R[41],E,E,7,[[["self"]],[R[1]]]],[11,"meta",E,E,8,[[["self"]],[R[1]]]],[11,R[41],E,E,8,[[["self"]],[R[1]]]],[11,"meta",E,E,9,[[["self"]],[R[1]]]],[11,R[41],E,E,9,[[["self"]],[R[1]]]],[11,"meta",E,E,10,[[["self"]],[R[1]]]],[11,R[41],E,E,10,[[["self"]],[R[1]]]],[11,"meta",E,E,12,[[["self"]],[R[1]]]],[11,R[41],E,E,12,[[["self"]],[R[1]]]],[11,"meta",E,E,13,[[["self"]],[R[1]]]],[11,R[41],E,E,13,[[["self"]],[R[1]]]],[11,"meta",E,E,14,[[["self"]],[R[1]]]],[11,R[41],E,E,14,[[["self"]],[R[1]]]],[11,"meta",E,E,15,[[["self"]],[R[1]]]],[11,R[41],E,E,15,[[["self"]],[R[1]]]],[11,"meta",E,E,16,[[["self"]],[R[1]]]],[11,R[41],E,E,16,[[["self"]],[R[1]]]],[11,R[42],R[19],E,1,[[],["self"]]],[11,R[42],E,E,0,[[],[R[1]]]],[11,R[42],R[39],E,18,[[],["self"]]],[11,"clone",R[19],E,1,[[["self"]],[R[43]]]],[11,"clone",E,E,0,[[["self"]],[R[1]]]],[11,"clone",R[36],E,7,[[["self"]],["booleanmetric"]]],[11,"clone",E,E,8,[[["self"]],["countermetric"]]],[11,"clone",E,E,10,[[["self"]],["eventmetric"]]],[11,"clone",E,E,11,[[["self"]],[R[44]]]],[11,"clone",E,E,4,[[["self"]],[R[22]]]],[11,"clone",E,E,12,[[["self"]],["stringmetric"]]],[11,"clone",E,E,13,[[["self"]],["stringlistmetric"]]],[11,"clone",E,E,5,[[["self"]],[R[10]]]],[11,"clone",E,E,16,[[["self"]],["uuidmetric"]]],[11,"clone",E,E,6,[[["self"]],["metric"]]],[11,"from",R[19],E,3,[[["context",[R[45]]],[R[45]]],["error"]]],[11,"from",E,E,3,[[["handleerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,"from",E,E,3,[[["storeerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,"from",E,E,3,[[["osstring"]],["error"]]],[11,"eq",E,E,1,[[["self"],[R[43]]],["bool"]]],[11,"fmt",E,E,1,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,0,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,3,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,2,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",R[36],E,7,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,8,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,9,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,10,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,11,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,4,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,12,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,13,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,5,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,14,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,15,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,16,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,6,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",R[19],E,20,[[["self"],[R[46]]],[R[8]]]],[11,"fmt",E,E,3,[[["self"],[R[46]]],[R[8]]]],[11,R[28],E,E,1,[[["i32"]],[[R[8],[R[43]]],[R[43]]]]],[11,R[28],R[36],E,5,[[["i32"]],[[R[10]],[R[8],[R[10]]]]]],[11,R[47],E,E,5,[[["self"],["__s"]],[R[8]]]],[11,R[47],E,E,6,[[["self"],["__s"]],[R[8]]]],[11,R[48],E,E,5,[[["__d"]],[R[8]]]],[11,R[48],E,E,6,[[["__d"]],[R[8]]]],[11,"cause",R[19],E,3,[[["self"]],[[R[2],["fail"]],["fail"]]]],[11,R[49],E,E,3,[[["self"]],[[R[49]],[R[2],[R[49]]]]]]],"p":[[3,R[50]],[4,R[51]],[4,R[52]],[3,"Error"],[3,R[53]],[4,R[54]],[4,"Metric"],[3,R[55]],[3,R[56]],[3,R[57]],[3,R[58]],[3,R[59]],[3,R[60]],[3,R[61]],[3,R[62]],[3,R[63]],[3,R[64]],[8,R[65]],[3,R[66]],[3,R[67]],[3,"Glean"]]};
searchIndex["glean_ffi"]={"doc":E,"i":[[5,"glean_enable_logging","glean_ffi","Initialize the logging system based on the target…",N,[[]]],[5,"glean_initialize",E,E,N,[[[R[68]],["u8"]],["u64"]]],[5,"glean_on_ready_to_send_pings",E,E,N,[[["u64"]]]],[5,"glean_is_upload_enabled",E,E,N,[[["u64"]],["u8"]]],[5,"glean_set_upload_enabled",E,E,N,[[["u64"],["u8"]]]],[5,"glean_send_ping",E,E,N,[[["u64"],["u8"]],["u8"]]],[5,"glean_send_ping_by_name",E,E,N,[[[R[68]],["u64"],["u8"]],["u8"]]],[5,"glean_ping_collect",E,E,N,[[["u64"]]]],[5,"glean_set_experiment_active",E,E,N,[[[R[68]],["i32"],["u64"]]]],[5,"glean_set_experiment_inactive",E,E,N,[[[R[68]],["u64"]]]],[5,"glean_experiment_test_is_active",E,E,N,[[[R[68]],["u64"]],["u8"]]],[5,"glean_experiment_test_get_data",E,E,N,[[[R[68]],["u64"]]]],[5,"glean_destroy_glean",E,E,N,[[["u64"],["externerror"]]]],[5,"glean_str_free",E,"Public destructor for strings managed by the other side of…",N,[[]]],[14,"define_metric",E,"Define the global handle map, constructor and destructor…",N,N]],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);