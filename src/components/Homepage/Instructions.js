import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Step from './Step'

const Instructions = () => {
    return (
        <div className="instructions">
            <h2 className="instruction-heading">How it works?</h2>
            <div className="step-container">
                <Step icon="mobile-alt" stepNum="1" stepTitle="Click a Pic" stepDes="Take a Picture of your plant leaf" />
                <FontAwesomeIcon icon="chevron-right" className="icon arrow-icon"/>
                <Step icon="cloud-upload-alt" stepNum="2" stepTitle="Upload on Rehnuma-E-Kisaan" stepDes="Visit Rehnuma-E-Kisaan on your device and click on Try Now to upload your picture" />
                <FontAwesomeIcon icon="chevron-right" className="icon arrow-icon" />
                <Step icon="list" stepNum="3" stepTitle="Get final Report" stepDes="Rehnuma-E-Kisaan will analyze your plant and will display a detailed report for you" />
            </div>

        </div>
    )
}

export default Instructions;