import React from 'react';
import { PageSt, MainSt, FooterContainerSt } from './main.styles';

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
  <PageSt>
    <MainSt>
      <CustomHtmlHead />
      <Nav />
      { children }
    </MainSt>
    <FooterContainerSt>
      <Footer />
    </FooterContainerSt>
  </PageSt>
)

export default Page;