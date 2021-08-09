import {
	getCSSLanguageService,
	LanguageService
} from 'vscode-css-languageservice'
import {
	Position
} from 'vscode-languageserver-types'

import {
	TextDocument
} from 'vscode-languageserver-textdocument'

import {
	getLanguageModelCache,
	LanguageModelCache
} from '../../embeddedSupport/languageModelCache'

import {
	LanguageMode
} from '../../embeddedSupport/languageModes'

import {
	LanguageId
} from '../../embeddedSupport/embeddedSupport'

export function getCSSMode() {

	let cssLanguageService = getCSSLanguageService();
}


function getStyleMode(
	languageId: LanguageId,
	languageService: LanguageService,
	documentRegions

): LanguageMode {

	const stylesheets = getLanguageModelCache(10, 60, (document) => {
		languageService.parseStylesheet(document)
	})

	return {
		getId() {
			return languageId
		},
		onDocumentRemoved() {

		},
		doComplete(document: TextDocument, position: Position) {

		},
		dispose() {

		}
	}

}