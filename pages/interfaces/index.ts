
export interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
};

export interface IndexProps {
  cards: any[];
};
