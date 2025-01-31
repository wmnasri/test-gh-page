import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';
import EzButton from './base/ez-button';

export default class EzBtnHeading3 extends EzButton {
    static get key() {
        return 'ezheading3';
    }

    /**
     * Executes the eZAppendContent to add a heading element in the editor.
     *
     * @method addHeading
     */
    addHeading() {
        this.execCommand({
            tagName: 'h3',
        });
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        const css = 'ae-button ez-btn-ae ez-btn-ae--heading ' + this.getStateClasses();
        const label = Translator.trans(/*@Desc("Heading")*/ 'heading_btn.label', {}, 'alloy_editor');

        return (
            <button className={css} onClick={this.addHeading.bind(this)} tabIndex={this.props.tabIndex} title={label}>
                <svg className="ez-icon ez-btn-ae__icon">
                    <use xlinkHref="/bundles/ezplatformadminui/img/ez-icons.svg#h3" />
                </svg>
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnHeading3.key] = AlloyEditor.EzBtnHeading3 = EzBtnHeading3;
eZ.addConfig('ezAlloyEditor.EzBtnHeading3', EzBtnHeading3);

EzBtnHeading3.propTypes = {
    command: PropTypes.string,
    modifiesSelection: PropTypes.bool,
};

EzBtnHeading3.defaultProps = {
    command: 'eZAddContent',
    modifiesSelection: true,
};
