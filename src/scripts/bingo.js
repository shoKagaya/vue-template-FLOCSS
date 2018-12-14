import award from '../components/molecules/award'

export default {
  name: 'Bingo',
  components: { award },
  data() {
    return {
      awardList: [
        {
          text: '1列ビンゴで ゲーム挑戦権',
          isClear: true
        },
        {
          text:
            '3列ビンゴで すごいすごいながい名前のクーポン3列ビンゴで すごいすごいながい名前のクーポン'
        },
        {
          text: '全列ビンゴで XXXクーポン'
        }
      ]
    }
  }
}
