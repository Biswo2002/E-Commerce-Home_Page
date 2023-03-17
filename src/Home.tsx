import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, HStack, Image, Input, Pressable, FlatList, Text, ScrollView } from 'native-base'

const Shoe = [
    {
        id: '1',
        title: 'Mens',
        img: 'https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=826&t=st=1678982834~exp=1678983434~hmac=b842b50821cde056fcf89e70edfa4e70c9be22c9f456961ef4b80d5e2651b3c3'
    },
    {
        id: '2',
        title: 'Womans',
        img: 'https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-133980.jpg?w=1060&t=st=1678982873~exp=1678983473~hmac=80dd3ff45cca881c15379243531259e1fbeeeec51ba08d689d6500f738adabd3'
    },
    {
        id: '3',
        title: 'Kids',
        img: 'https://img.freepik.com/free-photo/baby-shoes_1203-6837.jpg?w=996&t=st=1678982899~exp=1678983499~hmac=9b1c07a066a48ed862121bddfebb488222a0c6577a97f16afbd2af0c07d731a5'
    },
    {
        id: '4',
        title: 'Babies',
        img: 'https://img.freepik.com/free-photo/beautiful-pink-shoes_1203-1852.jpg?w=996&t=st=1678982929~exp=1678983529~hmac=3b04680ac23b04edb912d2890ebc3cac663e143fc4d8978898cd920780866359'
    },
]

const banner = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?size=626&ext=jpg&ga=GA1.2.755072944.1669057181&semt=ais',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-vector/christmas-discount-banner-colorful-template_1017-16602.jpg?w=1380&t=st=1678983566~exp=1678984166~hmac=b623fa8d655309424f00c71e8e62dfe601c7d0c42810dfc402ed6c930054d541',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-vector/happy-diwali-sale-banner-with-discount-details-pink-background_1017-39845.jpg?w=1380&t=st=1678983604~exp=1678984204~hmac=0ed7c207c5f9ccae8ad6f8df38edff46f153e3d36975b065e48f89573596fce4',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/premium-vector/buy-one-get-one-free-sale-banner-special-banner-with-text-effect_535749-1526.jpg?w=1060',
    },
]

const dress = [
    {
        id: '1',
        img: 'https://cdn-icons-png.flaticon.com/512/4527/4527899.png',
        title: 'shirt',
    },
    {
        id: '2',
        img: 'https://cdn-icons-png.flaticon.com/512/9947/9947774.png',
        title: 'Trouser',
    },
    {
        id: '3',
        img: 'https://cdn-icons-png.flaticon.com/512/4058/4058525.png',
        title: 'Hat',
    },
    {
        id: '4',
        img: 'https://cdn-icons-png.flaticon.com/512/10071/10071948.png',
        title: 'T-Shirt',
    },
    {
        id: '5',
        img: 'https://cdn-icons-png.flaticon.com/512/5699/5699290.png',
        title: 'Jeans',
    },
]
const Rumal = [
    {
        id: '1',
        img: 'https://cdn-icons-png.flaticon.com/512/4527/4527899.png',
        title: 'shirt',
    },
    {
        id: '2',
        img: 'https://cdn-icons-png.flaticon.com/512/9947/9947774.png',
        title: 'Trouser',
    },
    {
        id: '3',
        img: 'https://cdn-icons-png.flaticon.com/512/4058/4058525.png',
        title: 'Hat',
    },
    {
        id: '4',
        img: 'https://cdn-icons-png.flaticon.com/512/10071/10071948.png',
        title: 'T-Shirt',
    },
    {
        id: '5',
        img: 'https://cdn-icons-png.flaticon.com/512/5699/5699290.png',
        title: 'Jeans',
    },
]

const dress_item = [
    {
        id: '1',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '2',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '3',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '4',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '5',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '6',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '7',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '8',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '9',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews'
    },
    {
        id: '10',
        offer: '40% off ',
        img: 'https://img.freepik.com/premium-photo/men-s-tshirts-mockup-design-templatemockup_236836-23889.jpg?w=996',
        title: 'Lorem ipsum dolor sit amet, consectetur adipism icing elit.',
        price: '400.00 ',
        rate: '50k reviews',
    },
]

const Home = () => {
    return (
        <Box safeArea bgColor={"gray.50"} flex={1} >
            <ScrollView showsHorizontalScrollIndicator={false} >
                <Box
                    bgColor={'rose.500'}
                    height={Dimensions.get('window').height / 5}
                >
                    <HStack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        m={2}
                    >
                        <HStack
                            bgColor={'#ffff'}
                            m={2}
                            shadow={2}
                            p={2}
                            width={Dimensions.get('window').width / 1.25}
                            borderRadius={'md'}
                        >
                            <Pressable>
                                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9684/9684706.png' }} alt={''}
                                    size={6}
                                />
                            </Pressable>
                            <Text
                                fontSize={'md'}
                                color={'gray.400'}
                                ml={5}
                            >
                                I an looking for ...
                            </Text>
                        </HStack>
                        <Pressable
                            bgColor={'#fff'}
                            p={1}
                            shadow={'2'}
                            mr={'2'}
                            borderRadius={'md'}
                        >
                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9331/9331838.png' }} alt={''}
                                size={'6'}
                            />
                        </Pressable>
                    </HStack>

                    <Box
                        m={4}
                    >
                        <Text
                            color={'#ffff'}
                            fontSize={'lg'}
                            bold
                        >
                            Choose Style
                        </Text>
                        <HStack
                            bgColor={'#ffff'}
                            m={1}
                            mt={6}
                            shadow={'4'}
                            justifyContent={'space-around'}
                            p={2}
                            borderRadius={'lg'}
                        >
                            {
                                Shoe.map(item => (
                                    <Box
                                        key={item?.id}
                                        p={1}
                                    >
                                        <Image source={{ uri: item?.img }} alt={''}
                                            size={'8'}
                                        />
                                        <Text
                                            fontSize={'sm'}
                                            color={'#000'}
                                            bold
                                        >
                                            {item?.title}
                                        </Text>
                                    </Box>
                                ))
                            }
                        </HStack>
                    </Box>
                </Box>
                <Box
                    ml={2}
                    mt={16}
                    mr={2}
                >
                    <Text
                        fontSize={'md'}
                        color={'#000'}
                        bold
                        ml={'2'}
                    >
                        Promo dan Event
                    </Text>
                    <HStack
                        alignItems={'center'}
                    >
                        <Box
                            height={Dimensions.get('window').height / 5.5}
                            bgColor={'rose.500'}
                            width={'30%'}
                            borderRadius={'xl'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            mr={2}
                        >
                            <Text
                                fontSize={'md'}
                                bold
                                m={5}
                                color={'#ffff'}
                            >
                                See all Promo
                            </Text>
                        </Box>
                        <FlatList
                            data={banner}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Image alt=''
                                    source={{ uri: item?.img }}
                                    width={Dimensions.get('window').width / 1.5}
                                    height={Dimensions.get('window').height / 5.5}
                                    borderRadius={'xl'}
                                    resizeMode={'contain'}
                                    m={2}
                                />

                            )}
                        />
                    </HStack>
                </Box>
                <Box>
                    <HStack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        px={5}
                        mt={5}
                    >
                        <Text
                            color={'gray.700'}
                            bold
                            fontSize={'md'}
                        >
                            Categories
                        </Text>
                        <Text
                            color={'rose.500'}
                            fontSize={'sm'}
                        >
                            See All
                        </Text>
                    </HStack>
                    <Box
                        m={'2'}
                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={dress}
                            renderItem={({ item }) => (
                                <Pressable
                                    bgColor={'#fff'}
                                    shadow={2}
                                    py={2}
                                    px={'3'}
                                    borderRadius={'md'}
                                    m={2.5}
                                >
                                    <HStack
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <Image source={{ uri: item?.img }} alt={''}
                                            size={'8'}
                                        />
                                        <Text
                                            ml={2}
                                            fontSize={'sm'}
                                            bold
                                            color={'#272762'}
                                        >
                                            {item?.title}
                                        </Text>
                                    </HStack>
                                </Pressable>
                            )}
                        />
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={Rumal}
                            renderItem={({ item }) => (
                                <Pressable
                                    bgColor={'#fff'}
                                    shadow={2}
                                    py={2}
                                    px={'3'}
                                    borderRadius={'md'}
                                    m={2.5}
                                >
                                    <HStack
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <Image source={{ uri: item?.img }} alt={''}
                                            size={'8'}
                                        />
                                        <Text
                                            ml={2}
                                            fontSize={'sm'}
                                            bold
                                            color={'#272762'}
                                        >
                                            {item?.title}
                                        </Text>
                                    </HStack>
                                </Pressable>
                            )}
                        />
                    </Box>
                </Box>


                <Box
                    bgColor={'rose.200'}
                    m={4}
                    // p={2}
                    height={Dimensions.get('window').height / 2.9}
                    borderRadius={'lg'}
                >
                    <Box
                        borderTopLeftRadius={'md'}
                        bgColor={'rose.500'}
                        borderBottomRightRadius={'full'}
                        height={Dimensions.get('window').height / 5}
                        width={Dimensions.get('window').width / 2}
                    >
                    </Box>
                    <HStack
                        alignItems={'center'}
                        position={'absolute'}
                        m={4}
                    >
                        <Text
                            color={'#fff'}
                            bold
                            fontSize={'md'}
                        >
                            Best picks for you
                        </Text>
                        <Text
                            color={'rose.500'}
                            fontSize={'sm'}
                            left={'40'}
                        >
                            See All
                        </Text>
                    </HStack>

                    <Box
                        position={'absolute'}
                        top={16}
                        left={4}
                        right={4}
                    >
                        <FlatList
                            data={dress_item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (

                                <Pressable
                                    p={'2'}
                                    borderRadius={'lg'}
                                    bgColor={'#fff'}
                                    m={1}
                                    height={Dimensions.get('window').height / 4}
                                    width={Dimensions.get('window').width / 2.7}
                                >
                                    <Box
                                        bgColor={'rose.500'}
                                        alignSelf={'flex-end'}
                                        p={1}
                                        borderRadius={'md'}
                                    >
                                        <Text
                                            fontSize={'2xs'}
                                            color={'#fff'}
                                        >
                                            {item?.offer}
                                        </Text>
                                    </Box>
                                    <Image alt='' source={{ uri: item?.img }}
                                        size={24}
                                        resizeMode={'contain'}
                                        borderRadius={'2'}
                                        alignSelf={'center'}
                                    />
                                    <Text
                                        fontSize={'2xs'}
                                        bold
                                        py={1}
                                        color={'#272762'}
                                        textAlign={'left'}
                                    >
                                        {item?.title}
                                    </Text>
                                    <Text
                                        fontSize={'sm'}
                                        py={1}
                                        bold
                                        color={'rose.500'}
                                        textAlign={'left'}
                                    >
                                        {item?.price}
                                    </Text>
                                    <HStack
                                        alignItems={'center'}
                                    >
                                        <Image alt=''
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9513/9513713.png' }}
                                            size={3}
                                        />
                                        <Image alt=''
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9513/9513713.png' }}
                                            size={3}
                                        />
                                        <Image alt=''
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9513/9513713.png' }}
                                            size={3}
                                        />
                                        <Image alt=''
                                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9513/9513713.png' }}
                                            size={3}
                                        />
                                        <Text
                                            fontSize={'xs'}
                                            bold
                                            px={1}
                                            color={'#272762'}
                                            textAlign={'left'}
                                        >
                                            {item?.rate}
                                        </Text>
                                    </HStack>
                                </Pressable>
                            )}
                        />
                    </Box>

                </Box>

            </ScrollView>
        </Box>
    )
}

export default Home

const styles = StyleSheet.create({})