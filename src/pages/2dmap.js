//2D Map
import React from "react"
import Layout from "../components/layout.js"
import LeafletMap from "../components/leafletmap.js"


const TwoDMap = () => (
    <Layout>
        <section style={{"margin": "0.5rem 1rem"}}></section>
    

    {typeof window !== 'undefined' &&
        <LeafletMap
        position={[52,-0.5]}
        zoom={8}
        markerText={"sensor"}
        />
    }
    </Layout>
)
  
export default TwoDMap