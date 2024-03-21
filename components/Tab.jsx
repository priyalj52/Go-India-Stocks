import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,  ChakraProvider } from '@chakra-ui/react'
import DiscussionForum from './DiscussionForum'
import Marketstories from './Marketstories'
import RightBar from './RightBar'



const Feed = () => {
  return (
    <ChakraProvider >
      <Tabs isFitted variant='unstyled'>
        <TabList mb='1em' className='bg-[#154C79] gap-3' >
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Discussion Forum</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Market Stories</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DiscussionForum />
          </TabPanel>
          <TabPanel>
          <RightBar/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  )
}

export default Feed
