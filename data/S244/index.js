/**
 * S244相关接口
 * http://dev.ajmide.com/wiki/doku.php?id=dev:api:s244
 * @author jinhailiang
 * @date 2019/1/5
 */
'use strict'

/**
 * 投票插件列表
 * @param i 页码
 * @param c 条数
 */
export const voteList = (i=1, c=8) => {
    const list = []
    const baseItem = {
        pp_id: '563',
        program_id: '10146',
        program_name: '市民政务通-直通990',
        used: '1',
        banner: 'http://img-ossimg-test.ajmide.com/uploader/plugins/vote/o_1c61bufr815ab1fn51f6kepj9pfh.jpg',
        topic_id: null,
        h5link: 'https://m.ajmide.com/plug/vote/index.html?pp_id=563',
        timing: '0000-00-00 00:00:00',
        status: 4,
        title: '帖子头图',
        topimg: 'http://img-ossimg-test.ajmide.com/uploader/plugins/vote/o_1c61bufr815ab1fn51f6kepj9pfh.jpg',
        start_time: '2018-02-11 00:00:00',
        end_time: '2018-02-12 00:00:00',
        statusStr: '已结束',
        voteItemCount: 2,
        voteRecordCount: 0
    }

    for (let j=0; j<parseInt(c); j++) {
        baseItem.pp_id = `${i}${c}${j}`
        list.push({ ...baseItem })
    }

    return {
        code: '0',
        data: {
            list,
            count: 24
        },
        message: null,
        meta: null
    }
}




// {
//     code: '0',
//     data: {
//         list: [
//             {
//                 pp_id: `50${parseInt(i)}`,
//                 program_id: '10146',
//                 program_name: '市民政务通-直通990',
//                 used: '1',
//                 banner: 'http://img-ossimg-test.ajmide.com/uploader/plugins/vote/o_1c61bufr815ab1fn51f6kepj9pfh.jpg',
//                 topic_id: null,
//                 h5link: 'https://m.ajmide.com/plug/vote/index.html?pp_id=563',
//                 timing: '0000-00-00 00:00:00',
//                 status: 4,
//                 title: '帖子头图',
//                 topimg: 'http://img-ossimg-test.ajmide.com/uploader/plugins/vote/o_1c61bufr815ab1fn51f6kepj9pfh.jpg',
//                 start_time: '2018-02-11 00:00:00',
//                 end_time: '2018-02-12 00:00:00',
//                 statusStr: '已结束',
//                 voteItemCount: 2,
//                 voteRecordCount: 0
//             },
//             {
//                 pp_id: `60${parseInt(i)}`,
//                 program_id: '10146',
//                 program_name: '市民政务通-直通990',
//                 used: '0',
//                 banner: 'http://img-ossimg-test.ajmide.com/uploader/plugins/vote/o_1c55gr8b8ur91nd4a9ren1v3ph.jpg',
//                 topic_id: null,
//                 h5link: 'https://m.ajmide.com/plug/vote/index.html?pp_id=563',
//                 timing: '0000-00-00 00:00:00',
//                 status: 5,
//                 title: '视频投票',
//                 topimg: 'http://img-ossimg-test.ajmide.com/uploader/plugins/vote/o_1c55gr8b8ur91nd4a9ren1v3ph.jpg',
//                 start_time: '2018-01-21 00:00:00',
//                 end_time: '2018-02-22 00:00:00',
//                 statusStr: '草稿',
//                 voteItemCount: 39,
//                 voteRecordCount: 27
//             }
//         ],
//         count: 2
//     },
//     message: null,
//     meta: null
// }











