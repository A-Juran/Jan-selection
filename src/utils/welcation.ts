//axios request Yiyan
import request from './request'
interface YiYanType {
  type: string
}

//YI Yan
export const yiYan = async (type: YiYanType) => {
  let hitokoto: string
  await request
    .get('http://v1.hitokoto.cn?c=' + type)
    .then((res) => {
      hitokoto = res.hitokoto as string
    })
    .catch((error) => {
      console.log(error)
    })
  return hitokoto
}

//Time sharing reminder
export const timeSharingReminder = () => {
  //var
  let msg: string
  //getCurrentHour
  const currentDate = new Date()
  const hours = currentDate.getHours()
  if (hours < 6) {
    msg = '凌晨'
  } else if (hours < 9) {
    msg = '早上'
  } else if (hours < 12) {
    msg = '上午'
  } else if (hours < 18) {
    msg = '下午'
  } else {
    msg = '晚上'
  }
  return (msg += '好')
}
