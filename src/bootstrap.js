import * as font from 'expo-font'

export async function bootstrap() {

    await font.loadAsync({
       ' openBold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'openReg': require('../assets/fonts/OpenSans-Regular.ttf')
    })

}
