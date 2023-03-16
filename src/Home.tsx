import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, HStack, Image, Input, Pressable, FlatList, Text } from 'native-base'
const Shoe = [
    {
        id: '1',
        title: 'Mens',
        img: 'https://cdn-icons-png.flaticon.com/512/7713/7713017.png'
    },
    {
        id: '2',
        title: 'Womans',
        img: 'https://cdn-icons-png.flaticon.com/512/7713/7713017.png'
    },
    {
        id: '3',
        title: 'Kids',
        img: 'https://cdn-icons-png.flaticon.com/512/7713/7713017.png'
    },
    {
        id: '4',
        title: 'Babies',
        img: 'https://cdn-icons-png.flaticon.com/512/7713/7713017.png'
    },
]

const banner = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?size=626&ext=jpg&ga=GA1.2.755072944.1669057181&semt=ais',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?size=626&ext=jpg&ga=GA1.2.755072944.1669057181&semt=ais',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?size=626&ext=jpg&ga=GA1.2.755072944.1669057181&semt=ais',
    },
]

const Home = () => {
    return (
        <Box safeArea bgColor={"#fff"} flex={1} >
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
        </Box>
    )
}

export default Home

const styles = StyleSheet.create({})