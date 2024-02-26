import React from 'react'
import './RegistrationAnalysis.css';

function RegistrationAnalysis() {
    return (
        <div>
            <div class="row mt-3">
                <h3 className='mb-3'>Business registered Analyais</h3>
                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-blue registration-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Daily premium business registered</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-user f-left"></i><span>21</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-green registration-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Total premium business registered</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-rocket f-left"></i><span>486</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-yellow registration-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Daily basic business registered</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-user f-left"></i><span>12</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-pink registration-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Total basic business registered</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-rocket f-left"></i><span>486</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationAnalysis;