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

export interface ICardUnit {
    image: any
    label: string
    title: string
    description: string
}

export default function CardUnit(props: ICardUnit) {
    const { image, label, title, description } = props;

    return (
        <Container>
            <Content>
                <Card>
                    <CardContent>
                        <ImageWrapper>
                            <CardImage src={image}/>
                        </ImageWrapper>
                        <HighlightLabel>{label}</HighlightLabel>
                        <CardTitleSpan>{title}</CardTitleSpan>
                        <DescriptionSpan>{description}</DescriptionSpan>
                    </CardContent>
                </Card>
            </Content>
        </Container>
    )
}