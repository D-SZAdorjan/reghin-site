import React from 'react'
import GridRow from '../general/GridRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const InnerPageHeader1 = () => {
  return (
    <section className="container mx-auto">
        <h2 className="text-4xl sm:text-3xl mt-5">Inner Page Header 1</h2>
        <GridRow className="pt-15">
            <div className="flex-[0_0_auto] box-border max-w-full p-2.5">
                <div className="d-flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="text-base mr-1.5"/>
                    New York, USA
                </div>
            </div>
        </GridRow>
        <div className="flex-[0_0_auto] box-border max-w-full p-2.5">
            
        </div>
    </section>
  )
}

export default InnerPageHeader1;