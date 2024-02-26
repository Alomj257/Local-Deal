import React from 'react'
import './EarningAnalysis.css';

function EarningAnalysis() {
    return (
        <div>
            <div class="row mt-3">
                <h3 className='mb-2'>Business earning Analyais</h3>
                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-blue earning-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Daily premium business earnings</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-coins f-left"></i><span>$ 2100</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-green earning-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Total premium business earnings</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-money-bill f-left"></i><span>$ 1070</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-yellow earning-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Daily basic business earnings</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-coins f-left"></i><span>$667</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-pink earning-analysis-card">
                        <div class="card-block">
                            <h6 class="m-b-20">Total basic business earnings</h6>
                            <h2 class="text-right mt-3"><i class="fa fa-money-bill f-left"></i><span>$7645</span></h2>
                            {/* <p class="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EarningAnalysis;