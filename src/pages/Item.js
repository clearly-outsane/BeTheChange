import React from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'

import { cover } from '../styles'
import { Nav } from '../components'
import data from '../data'

const Item = () => {
    let { id } = useParams()
    if (!(id in data)) {
        return (
            <Grid
                container
                justify='center'
                alignItems='center'
                style={{ width: '100vw', height: '100vh' }}
            >
                <Typography variant='h1'>Product not found</Typography>
            </Grid>
        )
    }

    const impactColors = ['#79D143', '#FA993F']

    const printTags = () => {
        let toReturn = []
        data[id].tags.forEach((tag) =>
            toReturn.push(
                <div className='tags'>
                    <Typography variant='body1'>{tag}</Typography>
                </div>
            )
        )
        return toReturn
    }

    return (
        <div class='item-container'>
            <Nav />
            <div className='item-content'>
                <Grid container style={{ ...cover, position: 'relative' }}>
                    <Grid
                        container
                        justify='center'
                        item
                        xs={12}
                        md={6}
                        style={{ position: 'relative' }}
                        className='left-content'
                    >
                        <div
                            style={{
                                backgroundImage: `url(${data[id].image})`,
                                ...cover,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                        <div className='image-background'>
                            <Grid
                                container
                                style={{
                                    ...cover,
                                    position: 'absolute',
                                }}
                                alignItems='flex-end'
                                className='left-content-text'
                            >
                                <div>
                                    <Typography
                                        variant='h6'
                                        style={{ width: '100%' }}
                                    >
                                        {data[id].productName}
                                    </Typography>

                                    <Typography variant='body1'>
                                        Rs. {data[id].price}
                                    </Typography>
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        className='right-content'
                        direction='column'
                    >
                        <Grid item>
                            <Typography
                                style={{
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    color: `${
                                        impactColors[
                                            data[id].impact === 'low'
                                                ? 0
                                                : data[id].impact === 'moderate'
                                                ? 1
                                                : 2
                                        ]
                                    }`,
                                }}
                                variant='h3'
                            >
                                {data[id].impact} impact
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}>
                            {printTags()}
                        </Grid>
                        <Grid item style={{ maxWidth: 560, marginTop: 48 }}>
                            <Typography variant='body1'>
                                {data[id].Description}
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: 48 }}>
                            <div className='card'>
                                <Typography
                                    variant='h5'
                                    style={{ fontWeight: 600 }}
                                >
                                    CO2
                                </Typography>
                                <Typography variant='h5'>
                                    {data[id].co2} grams
                                </Typography>
                            </div>
                            <div className='card' style={{ marginTop: 24 }}>
                                <Typography
                                    variant='h5'
                                    style={{ fontWeight: 600 }}
                                >
                                    Water
                                </Typography>
                                <Typography variant='h5'>
                                    {data[id].water} litres
                                    <br />
                                    {!!data[id].per
                                        ? `per ${data[id].per}`
                                        : null}
                                </Typography>
                            </div>
                        </Grid>
                        <div class='section-footer'>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: ' 1fr 1fr 1fr',
                                    maxWidth: 140,
                                }}
                            >
                                <div>
                                    <GrFacebookOption size={24} />
                                </div>
                                <div>
                                    <AiOutlineTwitter size={24} />
                                </div>
                                <div>
                                    <AiOutlineWhatsApp size={24} />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Item
