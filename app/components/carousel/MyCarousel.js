import React, { useRef, useState } from 'react';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from 'react-native';
import scale, { verticalScale } from '../../utils/scale';
import { black, themecolor, white } from '../../utils/color';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageViewerModal from '../modals/image-viewer-modal';

const { width: screenWidth } = Dimensions.get( 'window' );

const MyCarousel = props => {
    const { data } = props;
    // const [data, setData] = useState([
    //     {
    //         id: 1,
    //         title: 'Statue inauguration',
    //         description: 'At Sardardham',
    //         url: 'https://sardardham.org/wp-content/uploads/2020/12/banner111.jpg',
    //     },
    //     {
    //         id: 2,
    //         title: 'Chintan Shibir',
    //         description: '2019',
    //         url: 'https://sardardham.org/wp-content/uploads/2020/12/banner222.jpg',
    //     },
    //     {
    //         id: 3,
    //         title: 'GPBS',
    //         description: 'Global Patidar Business Summit 2018',
    //         url: 'https://sardardham.org/wp-content/uploads/2020/12/banner-555.jpg',
    //     },
    //     {
    //         id: 4,
    //         title: 'GPBO',
    //         description: 'Global Patidar Business Organisation',
    //         url: 'https://sardardham.org/wp-content/uploads/2020/12/banner-444.jpg',
    //     },
    //     {
    //         id: 5,
    //         title: 'Sardar Jayanti',
    //         description: 'Celebration 2018',
    //         url: 'https://sardardham.org/wp-content/uploads/2020/12/banner-333.jpg',
    //     },
    // ]);
    const [ index, setIndex ] = useState( 0 );
    const [ isModalVisiable, setModalVisiable ] = useState( false );
    const carouselRef = useRef( null );
    const [ selectedData, setSelectedData ] = useState( [] );

    const renderItem = ( { item, index }, parallaxProps ) => {
        return (
            <View style={ styles.item }>
                <TouchableOpacity style={ styles.image } onPress={ () => {
                    let data = {
                        url: item.url
                    };
                    let tempData = [];
                    tempData.push( data );
                    setSelectedData( tempData );
                    setModalVisiable( true );
                } }>
                    <ParallaxImage
                        source={ { uri: item.url } }
                        containerStyle={ styles.imageContainer }
                        style={ styles.image }
                        parallaxFactor={ 0.4 }
                        { ...parallaxProps }
                    />
                </TouchableOpacity>
            </View>
        );
    };

    // const _renderHeader = () => {
    //     return (
    //         <Icon
    //             name="close"
    //             onPress={() => setModalVisiable(false)}
    //             size={30}
    //             color={white}
    //             style={{ textAlign: 'right', zIndex : 1, paddingRight: 10, right: 0, paddingTop: 20, position: 'absolute' }}
    //         />
    //     );
    // };

    return (
        <View style={ styles.container }>
            <Carousel
                ref={ carouselRef }
                sliderWidth={ screenWidth }
                itemWidth={ screenWidth - 60 }
                data={ data }
                renderItem={ renderItem }
                hasParallaxImages={ true }
                loop
                autoplay={ true }
                autoplayDelay={ 2000 }
                onSnapToItem={ ( index ) => setIndex( index ) }
                autoplayInterval={ 2000 }
            />
            <Pagination
                dotsLength={ data.length }
                activeDotIndex={ index }
                dotColor={ themecolor }
                inactiveDotColor={ black }
                dotStyle={ styles.dotStyle }
                inactiveDotStyle={ styles.inactiveDotStyle }
                inactiveDotOpacity={ 0.4 }
                inactiveDotScale={ 0.6 }
                dotContainerStyle={ styles.dotContainerStyle }
                containerStyle={ styles.containerStyle }
            />
            <ImageViewerModal
                isModalVisiable={ isModalVisiable }
                closeModal={ () => setModalVisiable( false ) }
                selectedData={ selectedData }
            />
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        backgroundColor: white,
        paddingTop: verticalScale( 20 ),
    },
    item: {
        width: screenWidth - scale( 60 ),
        height: scale( 200 ),
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select( { ios: 0, android: 1 } ),
        borderRadius: scale( 15 )
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    dotStyle: {
        width: scale( 20 ),
        height: scale( 10 ),
        borderRadius: verticalScale( 10 ),
    },
    inactiveDotStyle: {
        width: scale( 15 ),
        height: scale( 15 ),
        borderRadius: scale( 7.5 ),
    },
    dotContainerStyle: { marginHorizontal: scale( 5 ) },
    containerStyle: { paddingVertical: verticalScale( 10 ) },
} );

export default MyCarousel;
