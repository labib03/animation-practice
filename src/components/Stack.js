import PropTypes from "prop-types";

function Stack(props) {
  const { children, spacing = 2, direction = "row", wrap = false } = props;
  const style = {
    display: "flex",
    gap: `${spacing * 0.3}px`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
}

export default Stack;

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row"]),
};
