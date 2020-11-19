import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import shopping from '../assets/images/shopping.jpg'
import { Nav } from '../components'
import { cover, theme } from '../styles'

const Landing = () => {
    const matches = useMediaQuery('(min-width:600px)')
    const [barcode, setBarcode] = useState('')

    const handleChange = (prop) => (event) => {
        if (prop === 'barcode') {
            setBarcode(event.target.value)
        }
    }
    useEffect(() => {
        console.log(matches)
        return () => {}
    }, [matches])
    if (!!matches)
        return (
            <div
                style={{
                    height: '100vh',
                    position: 'relative',
                    width: '100vw',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateRows: '1fr 1fr',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateRows: '84px 1fr',
                        }}
                    >
                        <Nav />
                        <div
                            style={{
                                justifySelf: 'center',
                                alignSelf: 'center',
                                paddingBottom: 64,
                            }}
                        >
                            <div>
                                <Typography
                                    variant='h3'
                                    align='center'
                                    style={{ fontWeight: 600 }}
                                >
                                    We help you make <br />
                                    smarter shopping choices
                                </Typography>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    style={{ marginTop: 24 }}
                                >
                                    Simply scan or enter the product barcode and
                                    we’ll do the rest
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            position: 'relative',
                            marginLeft: 64,
                            marginRight: 64,
                            marginBottom: 24,
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${shopping})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionY: '50%',
                                ...cover,
                            }}
                        ></div>
                        <div
                            className='absolute-center'
                            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                        ></div>
                    </div>
                </div>
                <div className='absolute-center input-field'>
                    <div className='center-flexbox'>
                        <FormControl
                            variant='outlined'
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 8,
                                width: 480,
                            }}
                        >
                            <InputLabel
                                htmlFor='outlined-adornment-password'
                                style={{
                                    backgroundColor: 'white',
                                    paddingRight: 8,
                                }}
                            >
                                Enter barcode
                            </InputLabel>
                            <OutlinedInput
                                style={{ backgroundColor: 'white' }}
                                id='outlined-adornment-password'
                                value={barcode}
                                onChange={handleChange('barcode')}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <Link to={`/${barcode}`}>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                            >
                                                Submit
                                            </Button>
                                        </Link>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div
                style={{
                    display: 'grid',
                    gridTemplateRows: '1.2fr 1fr',
                    height: '100vh',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateRows: '84px 1fr',
                    }}
                >
                    <Nav />

                    <div
                        style={{
                            backgroundImage: `url(${shopping})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionY: '50%',
                            ...cover,
                        }}
                    ></div>
                </div>
                <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
                    <div style={{ paddingBottom: 48 }}>
                        <Typography
                            variant='h4'
                            align='center'
                            style={{ fontWeight: 600, padding: 18 }}
                        >
                            We help you make <br />
                            smarter shopping choices
                        </Typography>
                        <Typography variant='body1' align='center'>
                            Tap on the camera to begin
                        </Typography>
                    </div>
                </div>
            </div>
        )
}

export default Landing
