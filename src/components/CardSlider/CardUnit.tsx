import React from 'react';
import {
    Card,
    CardContent,
    CardImage,
    CardTitleSpan,
    Container,
    Content, DescriptionSpan,
    HighlightLabel,
    ImageWrapper
} from "./CardUnitElements";
import {myColors} from "../../resources/styling-constants";

export interface ICardUnit {
    image: any
    label: string
    title: string
    description: string
    version?: 'purple' | 'orange' | 'green'
}


function getBackgroundColor(version: string) {
    switch (version) {
        case 'orange':
            return myColors.background_orange;
        case 'green':
            return myColors.background_green;
        default:
            return myColors.light_purple;
    }
}

function getTitleColor(version: string) {
    switch (version) {
        case 'orange':
            return myColors.secondary;
        case 'green':
            return myColors.lime;
        default:
            return myColors.primary;
    }
}

function getHighlightColor(version: string) {
    switch (version) {
        case 'orange':
            return myColors.highlight_purple;
        case 'green':
            return myColors.highlight_orange;
        default:
            return myColors.danger;
    }
}

function getImageBackColor(version: string) {
    switch (version) {
        case 'orange':
            return myColors.secondary;
        case 'green':
            return myColors.lime;
        default:
            return myColors.light_purple;
    }
}

export default function CardUnit(props: ICardUnit) {
    const { image, label, title, description, version = 'purple' } = props;

    return (
        <Container>
            <Content>
                <Card pickedColor={getBackgroundColor(version)}>
                    <CardContent>
                        <ImageWrapper>
                            <CardImage src={image} pickedColor={getImageBackColor(version)}/>
                        </ImageWrapper>
                        <HighlightLabel pickedColor={getHighlightColor(version)}>{label}</HighlightLabel>
                        <CardTitleSpan pickedColor={getTitleColor(version)}>{title}</CardTitleSpan>
                        <DescriptionSpan>{description}</DescriptionSpan>
                    </CardContent>
                </Card>
            </Content>
        </Container>
    )
}