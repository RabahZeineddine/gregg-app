import colors from "../../utils/colors";

export default ({
  container: {
    flex: 1
  },
  profile: {
    backgroundColor: colors.orange,
    flexDirection: 'row',
    padding: 20
  },
  pictureHolder: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  picture: {
    width: 70,
    height: 70
  },
  dataHolder: {
    justifyContent: 'center',
    paddingLeft: 10
  },
  name: {
    color: colors.white,
    fontFamily: 'Overpass-SemiBold',
    fontSize: 14
  },
  cpf: {
    color: colors.white,
    fontFamily: 'Overpass-Light',
    fontSize: 12
  },
  xpLevel: {
    color: colors.white,
    fontFamily: 'Overpass-Regular',
    fontSize: 14
  },
  level: {
    color: colors.white,
    fontFamily: 'Overpass-Regular',
    fontSize: 14
  },
  pathsHolder: {
    flex: 1
  },
  labelStyle: {
    fontFamily: 'Overpass-Light',
    fontSize: 14
  },
  itemStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingLeft: 20
  }
})