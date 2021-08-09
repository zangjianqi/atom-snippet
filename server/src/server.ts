/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
	CompletionList,
	createConnection,
	Diagnostic,
	InitializeParams,
	ProposedFeatures,
	TextDocuments,
	TextDocumentSyncKind,
	TextDocumentPositionParams,
	CompletionItemKind
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import {
	
} from 'vscode-languageserver-types'

let connection = createConnection(ProposedFeatures.all);

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);


connection.onInitialize((_params: InitializeParams) => {

	return {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Full,

			completionProvider: {
				resolveProvider: false
			}
		}
	};
});

connection.onInitialized(() => {});


connection.onCompletion((_textDocumentPosition: TextDocumentPositionParams) => {
	return [
		{
			label: "a-if",
			kind: CompletionItemKind.Text,
			data: 1
		},
		{
			label: "a-else",
			kind: CompletionItemKind.Text,
			data: 2
		}
	]
	
});

documents.listen(connection);

connection.listen();
