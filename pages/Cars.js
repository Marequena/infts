import CarsCollections from "../components/elements/CarsCollections";
import Layout from "../components/layout/Layout";

function Cars() {
    return (
        <>
            <Layout
                headTitle="Collections"
                pageTitle="Collections"
                pageTitleSub={"Welcome ENFTX Collections page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Payments"}
            >
                
                <div className="col-12">
                        <div className="card filter-tab">
                            <div className="card-header">
                                <h4 className="card-title">Collections</h4> 
                            </div>
                            <div className="card-body bs-0 p-0 bg-transparent">
                                <div className="row">
                                    <CarsCollections/>
                                </div>
                            </div>
                        </div>
                    </div>
            </Layout>
        </>
    );
}
export default Cars;
