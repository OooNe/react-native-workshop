import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, CameraRoll } from 'react-native'
import { Camera, Permissions, Location } from 'expo'

export default class ReportView extends PureComponent {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState(() => ({ hasCameraPermission: status === 'granted' }))
    }

    snap = async () => {
        if (this.camera) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);


            if (status === 'granted') {
                let photo = await this.camera.takePictureAsync();

                console.log(photo, CameraRoll)

                let save_res = await CameraRoll.saveToCameraRoll(photo.uri, 'photo');

                console.log(save_res)
            }
        }
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log({ ...location })
    };

    render() {
        if (this.state.hasCameraPermission === null) {
            return <View />
        }

        this.getLocationAsync()

        return (
            <Camera
                ref={ref => { this.camera = ref; }}
                style={{ flex: 1 }}
                type={Camera.Constants.Type.back}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            this.snap().done()
                        }}>
                        <Text
                            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            {' '}Snap{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        )
    }
}
