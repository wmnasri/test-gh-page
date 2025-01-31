import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';
import EzButton from './base/ez-button';

export default class EzBtnCheckedList extends EzButton {
    static get key() {
        return 'ezcheckedlist';
    }

    /**
     * Executes the eZAppendContent command to add an unordered list containing
     * an empty list item.
     *
     * @method addList
     * @protected
     */
    addList() {
        this.execCommand({
            tagName: 'ul',
            content: '<li></li>',
            focusElement: 'li',
            attributes: {
                'class': 'checklist',
                'style': 'list-style-type: circle',
            }
        });
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        const label = 'CheckList';
        const css = 'ae-button ez-btn-ae ez-btn-ae--unordered-list ' + this.getStateClasses();

        return (
            <button className={css} onClick={this.addList.bind(this)} tabIndex={this.props.tabIndex} title={label}>
                <img className="ez-icon ez-btn-ae__icon" src={"/assets/legacy/build/img/ezadmin/check.png"} width={'24'} height={'24'} />
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnCheckedList.key] = AlloyEditor.EzBtnCheckedList = EzBtnCheckedList;

const eZ = (window.eZ = window.eZ || {});

eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnUnorderedList = EzBtnCheckedList;

EzBtnCheckedList.propTypes = {
    command: PropTypes.string,
    modifiesSelection: PropTypes.bool,
};

EzBtnCheckedList.defaultProps = {
    command: 'eZAddContent',
    modifiesSelection: true,
};
