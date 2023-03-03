import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="295" rx="10" ry="10" width="250" height="88" /> 
    <rect x="0" y="397" rx="10" ry="10" width="95" height="30" /> 
    <rect x="120" y="392" rx="25" ry="25" width="120" height="45" /> 
    <rect x="0" y="255" rx="10" ry="10" width="250" height="30" /> 
    <rect x="111" y="264" rx="0" ry="0" width="0" height="1" />
  </ContentLoader>
)

export default Skeleton;