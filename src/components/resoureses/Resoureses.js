import { ClickableTile } from '@carbon/react';
import React from 'react';
import "./_resoureses.scss";

const Resoureses = () => {
    return (
        <div style={{ width: "100%", padding: "0", margin: "0" }}>
            <div className='resoureses'>
                <div className='resoureses-div1'>
                    <h5>Jobs</h5>
                </div>

                <div className="resoureses_div2">
                    <div className='resoureses-div2-heading '>
                        <h1>Support</h1>
                    </div>
                    <div className="resoureses_tile_div">

                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>IBM Support</h4>
                            <p className='resoureses_tile_paragraph'>Receive help from our tech experts and check the status of a support case.</p>
                            <a href="/#" className='resoureses_tile_icon'><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>
                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>IBM Documentation</h4>
                            <p className='resoureses_tile_paragraph'>Search IBM product documentation.</p>
                            <a href="/#"  className='resoureses_tile_icon'><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>
                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>Product fixes</h4>
                            <p className='resoureses_tile_paragraph'>Fix Central provides fixes and updates for your software, hardware, and operating system.</p>
                            <a href="/#" className='resoureses_tile_icon'><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>
                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>Developer resources</h4>
                            <p className='resoureses_tile_paragraph'>Open source projects, knowledge resources, and developer advocates are ready to help. What will you create?</p>
                            <a href="/#" className='resoureses_tile_icon'><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>

                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>IBM Community</h4>
                            <p className='resoureses_tile_paragraph'>Connect with other developers via forums, blogs, files and face-to-face networking.</p>
                            <a href="/#" className='resoureses_tile_icon'><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>
                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>IBM Partner Support Desk</h4>
                            <p className='resoureses_tile_paragraph'>Get personalized, proactive support to navigate Partner Plus Programs.</p>
                            <a href="/#" className='resoureses_tile_icon'><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>
                        <ClickableTile className='resoureses_tile' id="" href="/" >
                            <h4 className='resoureses_tile_heading'>Customer support</h4>
                            <p className='resoureses_tile_paragraph'>Find support for contracts, orders, and invoices in your country or region.</p>
                            <a href="/#"><i class='bx bx-right-arrow-alt bx-sm'></i></a>
                        </ClickableTile>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resoureses
