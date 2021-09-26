const styles = {
  display: "flex",
  "@media screen and (max-width: 992px)": {
    marginTop: "20px",
    ".hero__community-button--desktop": {
      display: "none",
    },
    ".hero__community-button--mobile": {
      display: "block",
      width: 200,
      margin: "auto",
    },
  },
  "@media screen and (min-width: 992px)": {
    ".hero__community-button--desktop": {
      display: "block",
    },
    ".hero__community-button--mobile": {
      display: "none",
    },
  },
}

export default styles
