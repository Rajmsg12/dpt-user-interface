import React from 'react'

const CancellationPolicy = () => {
    return (
        <div>
            <div className="CancellationPolicy">
                <div className="titlewithhd">
                    <h3>Cancellation Policy</h3>
                </div>
                <p>You can cancel up to 24 hours in advance of the experience for a full refund</p>
                <div className="datainnerUl">
                    <div className="UlWrapper">
                        <div>For a full refund, you must cancel at least 24 hours before the experience’s start time.</div>
                        <div>If you cancel less than 24 hours before the experience’s start time, the amount you paid will not be refunded.</div>
                        <div>Cut-off times are based on the experience’s local time.</div>
                    </div>
                    {/* UlWrapper */}
                    <div className="UlWrapper">
                        <div>Cut-off times are based on the experience’s local time.</div>
                        <div>Any changes made less than 24 hours before the experience’s start time will not be accepted.</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CancellationPolicy
