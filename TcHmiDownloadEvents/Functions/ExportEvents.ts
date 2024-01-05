module TcHmi {
	export module Functions {
		export module TcHmiDownloadEvents {
			export function ExportEvents(eventGrid: any) {

                TcHmi.Symbol.readEx2('%s%ListEvents%/s%', function (data) {

                    let downloaderAElement = document.createElement('a');
                    let sName = "TcEvents";

                    downloaderAElement.download = sName.replace(/::/g, '_') + '.json';
                    
                    let jsonExport: any | undefined = tchmi_clone_object(data.value);

                    downloaderAElement.href = 'data:application/json;utf8,' + JSON.stringify(jsonExport, null, 2);
                    downloaderAElement.style.display = 'none';
                    document.body.appendChild(downloaderAElement);
                    downloaderAElement.click();
                    document.body.removeChild(downloaderAElement);

                });

			}
		}
	}
}
TcHmi.Functions.registerFunctionEx('ExportEvents', 'TcHmi.Functions.TcHmiDownloadEvents', TcHmi.Functions.TcHmiDownloadEvents.ExportEvents);
