import {
	Diagnostic,
	CompletionList
} from 'vscode-languageserver/node'

import {
	Position,
	Range
} from 'vscode-languageserver-types'

import {
	TextDocument
} from 'vscode-languageserver-textdocument'

import { getLanguageModelCache, LanguageModelCache } from './languageModelCache';


export interface LanguageMode {
	getId(): string;
	doValidation?: (document: TextDocument) => Diagnostic[];
	doComplete?: (document: TextDocument, position: Position) => CompletionList;
	onDocumentRemoved(document: TextDocument): void;
	dispose(): void;
}

export interface LanguageModes {
	getModeAtPosition(document: TextDocument, position: Position): LanguageMode | undefined;
	getModesInRange(document: TextDocument, range: Range): LanguageModeRange[];
	getAllModes(): LanguageMode[];
	getAllModesInDocument(document: TextDocument): LanguageMode[];
	getMode(languageId: string): LanguageMode | undefined;
	onDocumentRemoved(document: TextDocument): void;
	dispose(): void;
}

export interface LanguageModeRange extends Range {
	mode: LanguageMode | undefined;
	attributeValue?: boolean;
}


export function getLanguageModes(
	
): LanguageModes  {
	




	return {
		getModeAtPosition(
			document: TextDocument, 
			position: Position
		): LanguageMode | undefined {

			return ;
		},
		getModesInRange(
			document: TextDocument, 
			range: Range
		): LanguageModeRange[] {
			return []
		},
		getAllModes(): LanguageMode[] {

			return []
		},
		getAllModesInDocument(document: TextDocument): LanguageMode[] {
			return []
		},
		getMode(languageId: string): LanguageMode | undefined {
			return ;
		},
		onDocumentRemoved(document: TextDocument): void {

		},
		dispose(): void {

		}

	}
}