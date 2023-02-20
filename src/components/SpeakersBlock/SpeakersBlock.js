import * as S from './StyledSpeakersBlock'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios'
import SpeakerCard from '../SpeakerCard/SpeakerCard'

const SpeakersBlock = () => {
    const [speakersData, setSpeakersData] = useState(null)

    useEffect(() => {
        axiosInstance.get('tz/speakers')
            .then(speakers => {
                setSpeakersData(speakers.data.response);
                console.log(speakers.data.response);
            })
    }, [])


    return (
        <S.SpeakersBlockWrap>
            <S.SpeakersWrap>
                {
                    speakersData?.map((speaker, key) => {
                        return <SpeakerCard 
                                    key={key} 
                                    name={speaker.name} 
                                    desc={speaker.description}
                                    img={speaker.photo_url}
                                    />                        
                    })
                }
            </S.SpeakersWrap>
        </S.SpeakersBlockWrap>
    )
}

export default SpeakersBlock;