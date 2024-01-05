var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let TcHmiDownloadEvents;
        (function (TcHmiDownloadEvents) {
            function ExportEvents(eventGrid) {
                TcHmi.Symbol.readEx2('%s%ListEvents%/s%', function (data) {
                    let downloaderAElement = document.createElement('a');
                    let sName = "TcEvents";
                    downloaderAElement.download = sName.replace(/::/g, '_') + '.json';
                    let jsonExport = tchmi_clone_object(data.value);
                    downloaderAElement.href = 'data:application/json;utf8,' + JSON.stringify(jsonExport, null, 2);
                    downloaderAElement.style.display = 'none';
                    document.body.appendChild(downloaderAElement);
                    downloaderAElement.click();
                    document.body.removeChild(downloaderAElement);
                });
            }
            TcHmiDownloadEvents.ExportEvents = ExportEvents;
        })(TcHmiDownloadEvents = Functions.TcHmiDownloadEvents || (Functions.TcHmiDownloadEvents = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('ExportEvents', 'TcHmi.Functions.TcHmiDownloadEvents', TcHmi.Functions.TcHmiDownloadEvents.ExportEvents);
//# sourceMappingURL=ExportEvents.js.map