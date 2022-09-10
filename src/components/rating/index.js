import React, {isValidElement, memo, useEffect, useState} from 'react';
import {
  I18nManager,
  ImageBackground,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Images from '../../constants/Images';
// import Image from '../image';

/**
 * @returns A rating component
 */

const Rating = props => {
  const {
    starSize,
    spacing,
    count,
    half,
    emptyStar,
    halfStar,
    fullStar,
    disabled,
    update,
    opacity,
    display,
    value,
    rating,
    default: defaultPropsValue,
  } = props;
  const [displayValue, setDisplayValue] = useState(display || value);
  const [internalRating, setInternalRating] = useState(
    Number.parseFloat(rating),
  );

  const fullStarImage = fullStar || Images.ic_star;
  const emptyStarImage = emptyStar || Images.ic_emptyStar;

  useEffect(() => {
    setInternalRating(Number.parseFloat(rating));
  }, [props.rating]);

  // create half star
  const createHalfStarMember = (index, star, halfStar) => {
    let starComponent = halfStar || star;
    starComponent = isValidElement(starComponent) ? (
      starComponent
    ) : star != undefined && halfStar != undefined ? (
      <ImageBackground
        style={{width: starSize, height: starSize}}
        source={star}>
        <Image
          resizeMode={'contain'}
          style={{
            width: starSize,
            marginLeft: -5,
            height: starSize,
            transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
          }}
          source={halfStar}
        />
      </ImageBackground>
    ) : null;

    return (
      <View
        key={index}
        style={{
          paddingLeft: (spacing ?? 0) / 2,
          paddingRight: (spacing ?? 0) / 2,
        }}>
        {starComponent}
        <View style={{flexDirection: 'row', position: 'absolute'}}>
          <TouchableOpacity
            style={{
              height: starSize,
              width: (starSize ?? 0) / 2,
            }}
            disabled={disabled}
            onPress={() => {
              setInternalRating(index - 0.5);
              update && update(index - 0.5);
            }}
          />
          <TouchableOpacity
            style={{
              height: starSize,
              width: (starSize ?? 0) / 2,
            }}
            disabled={disabled}
            onPress={() => {
              setInternalRating(index);
              update && update(index);
            }}
          />
        </View>
      </View>
    );
  };

  // half rating mode
  const halfRatingMode = () => {
    let addToDecimal = 0;
    if (internalRating % 1 > 0) {
      addToDecimal = 1 - (internalRating % 1).toFixed(1);
    }
    const stars = [];
    for (let i = 1; i < (count ?? 0) + 1; i++) {
      const star = i <= (internalRating ?? 0) ? fullStarImage : emptyStarImage;
      const halfStarOne =
        (internalRating ?? 0) + addToDecimal == i ? halfStar : 0;
      stars.push(createHalfStarMember(i, star, halfStarOne));
    }
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {stars}
      </View>
    );
  };

  // create full star
  const createFullStarMember = (index, star) => {
    const starComponent = isValidElement(star) ? (
      star
    ) : star ? (
      <Image style={{width: starSize, height: starSize}} source={star} />
    ) : null;

    return (
      <View
        key={index}
        style={{
          paddingLeft: (spacing ?? 0) / 2,
          paddingRight: (spacing ?? 0) / 2,
        }}>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            setInternalRating(index);
            update && update(index);
          }}>
          {starComponent}
        </TouchableOpacity>
      </View>
    );
  };

  // full rating mode
  const fullRatingMode = () => {
    const stars = [];
    for (let i = 1; i < (count ?? 0) + 1; i++) {
      const star = i <= (internalRating ?? 0) ? fullStar : emptyStar;
      stars.push(createFullStarMember(i, star));
    }
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {stars}
      </View>
    );
  };

  // create partial star
  const createPartialStar = (
    partial,
    blockStyle,
    emptyBlockStyle,
    starStyle,
  ) => {
    return opacity ? (
      isValidElement(fullStar) ? (
        <View style={{opacity: partial}}>{fullStar}</View>
      ) : (
        <ImageBackground style={starStyle} source={emptyStarImage}>
          <Image
            style={{
              height: starSize,
              width: starSize,
              opacity: partial,
              backgroundColor: 'transparent',
            }}
            source={fullStarImage}
          />
        </ImageBackground>
      )
    ) : isValidElement(fullStar) ? (
      <View style={{flexDirection: 'row'}}>
        <View>{emptyStar}</View>
        <View
          style={{
            maxWidth: `${Math.round(partial * 100)}%`,
            overflow: 'hidden',
            position: 'absolute',
          }}>
          {fullStar}
        </View>
      </View>
    ) : (
      <ImageBackground style={starStyle} source={emptyStarImage}>
        <View style={{flexDirection: 'row'}}>
          <View style={blockStyle}>
            <Image
              style={{
                height: starSize,
                width: starSize,
                backgroundColor: 'transparent',
                position: 'absolute',
              }}
              source={fullStarImage}
            />
          </View>
          <View style={emptyBlockStyle} />
        </View>
      </ImageBackground>
    );
  };

  // display mode
  const displayMode = () => {
    const partial = (displayValue ?? 0) - Math.floor(displayValue ?? 0);
    const emptyBlockStyle = {
      height: starSize,
      width: (starSize ?? 0) * (1.0 - partial),
      backgroundColor: 'transparent',
    };
    const blockStyle = {
      height: starSize,
      width: (starSize ?? 0) * partial,
      backgroundColor: 'transparent',
      overflow: 'hidden',
    };
    const starStyle = {
      height: starSize,
      width: starSize,
    };
    const spacingStyle = {
      paddingLeft: (spacing ?? 0) / 2,
      paddingRight: (spacing ?? 0) / 2,
    };
    const stars = [];
    for (let i = 1; i < (spacing ?? 0) + 1; i++) {
      if (i == Math.floor(displayValue ?? 0) + 1) {
        //partial star
        const partialStarComponent = (
          <View key={i} style={spacingStyle}>
            {createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle)}
          </View>
        );

        stars.push(partialStarComponent);
      } else if (i > Math.floor(displayValue ?? 0) + 1) {
        //empty stars
        const emptyStarComponent = isValidElement(emptyStar) ? (
          <View style={spacingStyle} key={i}>
            {emptyStar}
          </View>
        ) : (
          <View key={i} style={spacingStyle}>
            <Image style={starStyle} source={emptyStarImage} />
          </View>
        );

        stars.push(emptyStarComponent);
      } else {
        //filled stars
        const starComponent = isValidElement(fullStar) ? (
          <View style={spacingStyle} key={i}>
            {fullStar}
          </View>
        ) : (
          <View key={i} style={spacingStyle}>
            <Image style={starStyle} source={fullStarImage} />
          </View>
        );
        stars.push(starComponent);
      }
    }
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {stars}
        </View>
      </View>
    );
  };

  const finalComponent =
    displayValue === undefined
      ? half
        ? halfRatingMode()
        : fullRatingMode()
      : displayMode();

  return <View>{finalComponent}</View>;
};

export default memo(Rating);

Rating.defaultProps = {
  fullStar: Images.ic_star,
  halfStar: Images.ic_emptyStar,
  emptyStar: Images.ic_emptyStar,
  disabled: false,
  display: undefined,
  count: 5,
  default: 0,
  starSize: 30,
  update: () => {},
  opacity: false,
  half: false,
  spacing: 0,
};
