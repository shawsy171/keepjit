import React from 'react';

// components
import CustomHtmlHead from './head';
import Nav from '../components/Nav/Nav';

interface Props {
  children: React.ReactNode
}

interface LayoutPage<P = {}> extends React.SFC<P> {

}

const Page: LayoutPage<Props>= ({ children }: Props) => (
  <div>
    <CustomHtmlHead />
    <Nav />
    { children }
  </div>
)

export default Page;