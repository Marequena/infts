import { connect } from "react-redux";
import DoughnutChart from "../components/chart/DoughnutChart";
import BarChart from "../components/chart/LineChart";
import RecentBid from "../components/elements/RecentBid";
import CarsCollections from "../components/elements/CarsCollections";
import AvatarsCollections from "../components/elements/avatarsCollections";
import Layout from "../components/layout/Layout";
import RecentActivity from "./../components/elements/RecentActivity";
import SectionLEftHeader from "../components/layout/SectionLeft";
import SectionRightHeader from "../components/layout/SectionRight";

function Home({ lineData, doughnutData }) {
    return (
        <>
            <Layout
                headTitle="Dashboard"
                // pageTitle="Dashboard"
                pageTitleSub={"Welcome ENFTX Dashboard"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Dashboard"}
            >
                <div className="row">
                    <div class="col-xxl-6">
                        <SectionLEftHeader/>
                    </div>
                    <div className="col-xxl-6">
                        <SectionRightHeader/>
                    </div>

                    <div className="col-12">
                        <div className="card filter-tab m-0">
                            <div className="card-header">
                                <h4 className="card-title">Collections</h4>
                                <div className="filter-nav">
                                    <a href="#avatars" className="active">
                                        Avatars
                                    </a>
                                    <a href="#cars">
                                        Cars
                                    </a>
                                    
                                </div>
                            </div>
                            <div className="card-body bs-0 p-0 bg-transparent">
                                <div id="cars" className="row">
                                    <AvatarsCollections />
                                </div>
                                <div id="cars" className="row">
                                    <CarsCollections />
                                </div>
                            </div>
                        </div>
                    </div>

                   {/*<div className="col-xxl-3 col-xl-12">
                        <div className="card m-0">
                            <div className="card-header">
                                <h4 className="card-title">Coollections</h4>
                            </div>
                            <div className="card-body bs-0 bg-transparent p-0">
                                <div className="row">
                                    <div className="col-xxl-12 col-xl-4 col-md-4 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-primary">
                                                <span>
                                                    <i className="ri-wallet-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>24K</h3>
                                                <p>Artworks</p>
                                            </div>

                                            <div className="widget-arrow">
                                                <p className="text-success mb-0">
                                                    +168.001%{" "}
                                                    <span>
                                                        <i className="bi bi-arrow-up"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-12 col-xl-4 col-md-4 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-secondary">
                                                <span>
                                                    <i className="ri-wallet-2-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>82K</h3>
                                                <p>Auction</p>
                                            </div>
                                            <div className="widget-arrow">
                                                <p className="text-danger mb-0">
                                                    +168.001%{" "}
                                                    <span>
                                                        <i className="bi bi-arrow-down"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-12 col-xl-4 col-md-4 col-sm-6">
                                        <div className="stat-widget d-flex align-items-center">
                                            <div className="widget-icon me-3 bg-success">
                                                <span>
                                                    <i className="ri-wallet-3-line"></i>
                                                </span>
                                            </div>
                                            <div className="widget-content">
                                                <h3>1K</h3>
                                                <p>Creators</p>
                    
                                                </div>
                                            <div className="widget-arrow">
                                                <p className="text-success mb-0">
                                                    +168.001%{" "}
                                                    <span>
                                                        <i className="bi bi-arrow-up"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8 col-lg-6">
                        <div id="user-activity" className="card">
                            <div className="card-header">
                                <h4 className="card-title">ETH Price</h4>
                            </div>

                            <div className="card-body">
                                <BarChart lineData={lineData} />
                            </div>
                        </div>
                    </div>
                    <div className=" col-xxl-3 col-xl-4 col-lg-6">
                        <div className="card">
                            <div className="card-header justify-content-center">
                                <h4 className="card-title">Statistics</h4>
                            </div>
                            <div className="card-body bs-0">
                                <DoughnutChart doughnutData={doughnutData} />
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-12">
                        <div className="card m-0">
                            <div className="card-header">
                                <h4 className="card-title">Recent Activity</h4>
                                <a href="#">See more</a>
                            </div>
                            <div className="card-body p-0">
                                <RecentActivity />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Cars</h4>
                                <a href="#">See more</a>
                            </div>
                            <div className="card-body bs-0 p-0 top-creators-content  bg-transparent">
                                <div className="row">
                                    <TopCreators />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header flex-row">
                                <h4 className="card-title">Recent Bid </h4>
                            </div>
                            <div className="card-body bs-0 bg-transparent p-0">
                                <div className="bid-table">
                                    <RecentBid />
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </Layout>
        </>
    );
}

const mapStateToProps = (state) => ({
    lineData: state.LineChart.expenses,
    doughnutData: state.DoughnutChart.statistics,
});
export default connect(mapStateToProps, {})(Home);
