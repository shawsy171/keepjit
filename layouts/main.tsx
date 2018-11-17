import React from 'react';

// components
import CustomHtmlHead from './head';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

interface Props {
  children: React.ReactNode
}

interface LayoutPage<P = {}> extends React.SFC<P> {

}

const Page: LayoutPage<Props>= ({ children }: Props) => (
  <div>
    <div className="main">
      <CustomHtmlHead />
      <Nav />
      { children }
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default Page;