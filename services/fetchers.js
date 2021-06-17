import firestore from '@react-native-firebase/firestore';



const followProfile = async (userId, userToFollowId, isSubscribed) => {
    if (!isSubscribed) { //si pas encore d'abonnements
        firestore()
        .collection('user_follower')
        .add({
            profileId: userToFollowId,
            userId: userId,
        })
        .then(() => {
            console.log('Profile followed !');
        })
        .catch(error => {
            console.log('Something went wrong with following profile.');
        });
    }
    

};

export {
    followProfile
}