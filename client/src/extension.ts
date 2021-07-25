import * as path from 'path';
import {
    LanguageClientOptions,
    ServerOptions,
    LanguageClient,
    TransportKind
} from 'vscode-languageclient/node'
let client: LanguageClient;

export function activate(context): void {

    let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

    let serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
    }
    let clientOption: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'atom' }]
    };

    client = new LanguageClient(
        'atur',
        'Atom Language Server',
        serverOptions,
        clientOption
    );
    client.start()
    
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
		return undefined;
	}
    return client.stop()
}