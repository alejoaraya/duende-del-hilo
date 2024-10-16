import { StyleSheet } from "@react-pdf/renderer";

export const stylesNavbar = StyleSheet.create({
  headerStructure: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // width: 1100,
    border: "1px solid #000",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  headerItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    fontSize: 5,
  },
  headerItemCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    fontSize: 10,
    marginRight: 10,
  },
  headerItemCenterMedia: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 10,
    marginRight: 10,
  },
  headerItemData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
    marginTop: 18,
    marginRight: 10,
  },
  logo: {
    width: 80,
    height: 80,
    // marginBottom: 25,
  },
});

export const stylesSection = StyleSheet.create({
  sectionStructure: {
    // width: 1100,
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #000",
    borderRight: "1px solid #000",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    fontSize: 12,
  },
});

export const stylesDetail = StyleSheet.create({
  detailStructure: {
    // width: 780,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderLeft: "1px solid #000",
    borderRight: "1px solid #000",
    paddingRight: 30,
    paddingLeft: 15,
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
  hr: {
    borderBottom: "0.5px solid black",
    paddingBottom: 1,
    width: 100,
  },
  detailItem: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    fontSize: 10,
    borderBottom: "0.1px solid black",
    paddingBottom: 1,
    paddingTop: 1,
  },
  detailTitle: {
    borderBottom: "0.1px solid black",
    paddingBottom: 1,
  },
  detailSubTitle: {
    borderBottom: "0.5px solid black",
    paddingBottom: 1,
  },
  date: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 12,
  },
});

export const stylesTyC = StyleSheet.create({
  tycStructure: {
    // width: 1100,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #000",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  tyc: {
    marginTop: 5,
    fontSize: 10,
  },
});

export const stylesPrice = StyleSheet.create({
  priceStructure: {
    // width: 1100,
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #000",
    borderRight: "1px solid #000",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    gap: 20,
  },
  price: {
    display: "flex",
    flexDirection: "column",
    fontSize: 12,
  },
});

export const stylesSignature = StyleSheet.create({
  signatureStructure: {
    // width: 1100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeft: "1px solid #000",
    borderRight: "1px solid #000",
    borderBottom: "1px solid #000",
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  signature: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
});
