import React from 'react'
import './MyWork.css'
import TopDataText from '../sharedComponents/TopDataText'
import Card from '../sharedComponents/Card'
import picture from '../../assets/images.jpg'
import { BsArrowBarRight } from 'react-icons/bs'
import { CgCodeSlash } from 'react-icons/cg'
import image1 from '../../assets/download.jpeg'
import image2 from '../../assets/download(1).jpeg'
import image3 from '../../assets/download(2).jpeg'
import image4 from '../../assets/images.jpeg'
import './MyWork.css'

const MyWork = () => {

    const cardDataLatestWork = [
        {
            image: image1,
            latestWorkCard: true,
            latestWorkCardHeading: "Web Development"
        },
        {
            latestWorkCard: true,
            image: image2,
            latestWorkCardHeading: "App Dev"
        },
        {
            latestWorkCard: true,
            image: image3,
            latestWorkCardHeading: "Mobile Prog"

        },
        {
            latestWorkCard: true,
            image: image4,
            latestWorkCardHeading: "Destop Apps"
        }
    ]
    return (
        <div id='mywork'>
            <div>
                <TopDataText
                    topText="My portfolio"
                    headingText="My Latest Work"
                    descText="Welcome to my web portfolio Welcome to my web portfolio Welcome to my web portfolio"

                />
            </div>


            <div className='about-me-bottom-cards-services'>
                {cardDataLatestWork.map((item, index) => {
                    return (

                        <Card
                            image={item.image}
                            latestWorkCard={item.latestWorkCard}
                            latestWorkCardHeading={item.latestWorkCardHeading}
                            latestWorkSubHeadig="Web Design"
                            latestWorkIcon={<BsArrowBarRight />}

                        />
                    )
                })}
            </div>

        </div>
    )
}

export default MyWork
