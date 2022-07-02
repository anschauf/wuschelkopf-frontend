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
        'label': '36% Drop chance',
        'title': 'DARK',
        'description': 'Together with the light skin, this is the most common tier.',
        'version': "purple"
    },
    {
        'image': IMG_SKIN_LIGHT,
        'label': '36% Drop chance',
        'title': 'LIGHT',
        'description': 'Also the most common tier, but they get faster sun-burned.',
        'version': "purple"
    },
    {
        'image': IMG_SKIN_GHOST,
        'label': '16% Drop chance',
        'title': 'GHOST',
        'description': 'A rarer skin, as this is a dead Wuschelkopf returning as a transparent ghost back to the world.',
        'version': "purple"

    },
    {
        'image': IMG_SKIN_SKELETT,
        'label': '8% Drop chance',
        'title': 'SKELETT',
        'description': 'The rarest are undead bodies. The skeletal Wuschelkopf come with their own facial models making them the most wanted.',
        'version': "purple"
    }
]

export const hairRarities: ICardUnit[] = [
    {
        'image': IMG_HAIR_NORMAL,
        'label': '80% Drop chance',
        'title': 'Normal',
        'description': 'Unicolor, but with 10 different appealing colors. All of them have the same drop chance.',
        'version': "orange"
    },
    {
        'image': IMG_HAIR_SHINING,
        'label': '12% Drop chance',
        'title': 'SHINING',
        'description': 'Shining hair coming in three different colors, which let your Wuschelkopf shine out of the mass.',
        'version': "orange"

    },
    {
        'image': IMG_HAIR_RAINBOW,
        'label': '5% Drop chance',
        'title': 'RAINBOW',
        'description': 'Multicolored hairs. Wear it with pride.',
        'version': "orange"
    },
    {
        'image': IMG_HAIR_BURNING,
        'label': '3% Drop chance',
        'title': 'BURNING',
        'description': 'Just bad-ass!',
        'version': "orange"
    }
]

export const handItemRarities: ICardUnit[] = [
    {
        'image': IMG_HANDITEM_NONE,
        'label': '4% Drop chance',
        'title': 'NONE',
        'description': 'No items at all. But who needs a item, when he/she just looks awesome.',
        'version': "green"
    },
    {
        'image': IMG_HANDITEM_LEFTONLY,
        'label': '4% Drop chance',
        'title': 'Left',
        'description': 'Only for rare lefties.',
        'version': "green"
    },
    {
        'image': IMG_HANDITEM_RIGHTONLY,
        'label': '46% Drop chance',
        'title': 'Right',
        'description': 'Many cool items are found here=).',
        'version': "green"

    },
    {
        'image': IMG_HANDITEM_BOTH,
        'label': '46% Drop chance',
        'title': 'Both',
        'description': 'Because holding a teddy and a lightsaber simultaneously is just cool.',
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
        'label': '35% (m), 50% (f) Drop chance',
        'title': 'None',
        'description': 'Basic Wuschelkopf hair-cut. Simply stylish',
        'version': "purple"
    },
    {
        'image': IMG_HAIREXTENSION_HAIRCUT,
        'label': '35% (m), 50% (f) Drop chance',
        'title': 'Haircut',
        'description': 'Beautiful hair-bread for great looks.',
        'version': "purple"
    },
    {
        'image': IMG_HAIREXTENSION_BEARD,
        'label': '15% (m) Drop chance',
        'title': 'Beard',
        'description': 'For all the hipster around us.',
        'version': "purple"

    },
    {
        'image': IMG_HAIREXTENSION_BOTH,
        'label': '15% (m) Drop chance',
        'title': 'Both',
        'description': 'Wow! So much Wuschel',
        'version': "purple"
    }
]