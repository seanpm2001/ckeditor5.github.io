/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */DecoupledEditor.create(document.querySelector("#mini-inspector-paragraph")).then((e=>{window.editor=e,MiniCKEditorInspector.attach(e,document.querySelector("#mini-inspector-paragraph-container"))})).catch((e=>{console.error(e.stack)}));