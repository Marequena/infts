import React from 'react';

const data = 
    {
        iduser: 1,
        name: "Miguel Requena",
        descrip: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi.",
        avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png",
        cost:1000,
        cash:2500,
        gem:340,
        live:60,
        status:true
    }
;

function SectionRightHeader() {
    return (
        <>
            <div class="card top-bid">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img
                                src={data.avatar}
                                class="img-fluid rounded"
                                alt="..."
                            />
                        </div>
                        <div class="col-md-6">
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src="/images/avatar/1.jpg"
                                    alt=""
                                    className="me-3 avatar-img"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="mb-0">
                                        {data.name}
                                        <span className="circle bg-success"></span>
                                    </h6>
                                </div>
                            </div>
                            <h4 class="card-title">Profile</h4>
                            <div className="d-flex justify-content-between mt-3 mb-3">
                                <div className="text-start">
                                    <p className="mb-2">Gem</p>
                                    <h5 className="text-muted">{data.gem}</h5>
                                </div>
                                <div className="text-end">
                                    <p className="mb-2">
                                        Cash :{" "}
                                        <strong className="text-primary">{data.cash}</strong>
                                    </p>
                                    <h5 className="text-muted">{data.cash}</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a
                                    href=""
                                    className="btn btn-primary"
                                >
                                    My Bands
                                </a>
                                <a
                                    href=""
                                    className="btn btn-secondary"
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SectionRightHeader;
