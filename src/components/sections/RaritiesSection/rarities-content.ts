import {ICardUnit} from "../../CardSlider/CardUnit";


import IMG_SKIN_DARK from '../../../images/card-slider/skin_dark.png'
import IMG_SKIN_LIGHT from '../../../images/card-slider/skin_light.png'
import IMG_SKIN_GHOST from '../../../images/card-slider/skin_ghost.png'
import IMG_SKIN_SKELETT from '../../../images/card-slider/skin_skelett.png'

import IMG_HAIR_NORMAL from '../../../images/card-slider/hair_normal.png'
import IMG_HAIR_SHINING from '../../../images/card-slider/hair_shining.png'
import IMG_HAIR_RAINBOW from '../../../images/card-slider/hair_rainbow.png'
import IMG_HAIR_BURNING from '../../../images/card-slider/hair_burning.png'

import IMG_HANDITEM_NONE from '../../../images/card-slider/handitem_none.png'
import IMG_HANDITEM_LEFTONLY from '../../../images/card-slider/handitem_leftOnly.png'
import IMG_HANDITEM_RIGHTONLY from '../../../images/card-slider/handitem_rightOnly.png'
import IMG_HANDITEM_BOTH from '../../../images/card-slider/handitem_both.png'

import IMG_HAIRDECO_NONE from '../../../images/card-slider/hairdeco_none.png'
import IMG_HAIRDECO_INSIDE from '../../../images/card-slider/hairdeco_inside.png'
import IMG_HAIRDECO_HAT from '../../../images/card-slider/hairdeco_hat.png'
import IMG_HAIRDECO_BOTH from '../../../images/card-slider/hairdeco_both.png'

import IMG_HAIREXTENSION_NONE from '../../../images/card-slider/hairextension_none.png'
import IMG_HAIREXTENSION_HAIRCUT from '../../../images/card-slider/hairextension_haircut.png'
import IMG_HAIREXTENSION_BEARD from '../../../images/card-slider/hairextension_beard.png'
import IMG_HAIREXTENSION_BOTH from '../../../images/card-slider/hairextension_both.png'



export const skinRarities: ICardUnit[] = [
    {
        'image': IMG_SKIN_DARK,
        'label': '46% Drop chance',
        'title': 'DARK',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"
    },
    {
        'image': IMG_SKIN_LIGHT,
        'label': '46% Drop chance',
        'title': 'LIGHT',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"
    },
    {
        'image': IMG_SKIN_GHOST,
        'label': '6% Drop chance',
        'title': 'GHOST',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"

    },
    {
        'image': IMG_SKIN_SKELETT,
        'label': '2% Drop chance',
        'title': 'SKELETT',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"
    }
]

export const hairRarities: ICardUnit[] = [
    {
        'image': IMG_HAIR_NORMAL,
        'label': '25% Drop chance',
        'title': 'NORMAL',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"
    },
    {
        'image': IMG_HAIR_RAINBOW,
        'label': '25% Drop chance',
        'title': 'RAINBOW',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"
    },
    {
        'image': IMG_HAIR_SHINING,
        'label': '25% Drop chance',
        'title': 'SHINING',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"

    },
    {
        'image': IMG_HAIR_BURNING,
        'label': '25% Drop chance',
        'title': 'BURNING',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"
    }
]

export const handItemRarities: ICardUnit[] = [
    {
        'image': IMG_HANDITEM_NONE,
        'label': '25% Drop chance',
        'title': 'NONE',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "green"
    },
    {
        'image': IMG_HANDITEM_LEFTONLY,
        'label': '25% Drop chance',
        'title': 'Left',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "green"
    },
    {
        'image': IMG_HANDITEM_RIGHTONLY,
        'label': '25% Drop chance',
        'title': 'Right',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "green"

    },
    {
        'image': IMG_HANDITEM_BOTH,
        'label': '25% Drop chance',
        'title': 'Both',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "green"
    }
]

export const hairdecoRarities: ICardUnit[] = [
    {
        'image': IMG_HAIRDECO_NONE,
        'label': '25% Drop chance',
        'title': 'None',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"
    },
    {
        'image': IMG_HAIRDECO_INSIDE,
        'label': '25% Drop chance',
        'title': 'Inside',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"
    },
    {
        'image': IMG_HAIRDECO_HAT,
        'label': '25% Drop chance',
        'title': 'Hat',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"

    },
    {
        'image': IMG_HAIRDECO_BOTH,
        'label': '25% Drop chance',
        'title': 'Both',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "orange"
    }
]

export const hairExtensionsRarities: ICardUnit[] = [
    {
        'image': IMG_HAIREXTENSION_NONE,
        'label': '25% Drop chance',
        'title': 'None',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"
    },
    {
        'image': IMG_HAIREXTENSION_HAIRCUT,
        'label': '25% Drop chance',
        'title': 'Haircut',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"
    },
    {
        'image': IMG_HAIREXTENSION_BEARD,
        'label': '25% Drop chance',
        'title': 'Beard',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"

    },
    {
        'image': IMG_HAIREXTENSION_BOTH,
        'label': '25% Drop chance',
        'title': 'Both',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        'version': "purple"
    }
]