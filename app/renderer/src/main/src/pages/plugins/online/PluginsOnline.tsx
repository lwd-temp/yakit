import React, {useState} from "react"
import {PluginManage} from "../manage/PluginManage"
import styles from "./PluginsOnline.module.scss"
import {YakitTag} from "@/components/yakitUI/YakitTag/YakitTag"
import {YakitSelect} from "@/components/yakitUI/YakitSelect/YakitSelect"
import {funcSearchType} from "../funcTemplate"
import {YakitInput} from "@/components/yakitUI/YakitInput/YakitInput"
import {YakitButton} from "@/components/yakitUI/YakitButton/YakitButton"
import {OutlineSearchIcon} from "@/assets/icon/outline"
import {Divider} from "antd"
import classNames from "classnames"
import {useMemoizedFn} from "ahooks"

interface PluginsOnlineProps {}
export const PluginsOnline: React.FC<PluginsOnlineProps> = React.memo((props) => {
    return (
        <div>
            <PluginsOnlineHeard />
            <PluginManage />
        </div>
    )
})

interface PluginsOnlineHeardProps {}
const PluginsOnlineHeard: React.FC<PluginsOnlineHeardProps> = React.memo((props) => {
    return (
        <div className={styles["plugin-online-heard"]}>
            <div className={styles["plugin-online-heard-bg"]} />
            <div className={styles["plugin-online-heard-content"]}>
                <div className={styles["plugin-online-heard-content-top"]}>
                    <div className={styles["plugin-online-heard-content-top-tip"]}>Hello everyone! 👋</div>
                    <div className={styles["plugin-online-heard-content-top-title"]}>Yakit 插件商店</div>
                    <div className={styles["plugin-online-heard-content-top-subTitle"]}>
                        这里可以写一句对于插件的 slogan
                    </div>
                    <YakitCombinationSearchCircle />
                </div>
            </div>
        </div>
    )
})
interface YakitCombinationSearchCircleProps {}
const YakitCombinationSearchCircle: React.FC<YakitCombinationSearchCircleProps> = React.memo((props) => {
    return (
        <div className={styles["yakit-combination-search-circle"]}>
            <YakitSelect
                defaultValue='keyword'
                wrapperStyle={{width: 75}}
                wrapperClassName={styles["yakit-combination-search-circle-select-wrapper"]}
                bordered={false}
                options={funcSearchType}
            />
            <div className={styles["yakit-combination-search-circle-line"]} />
            <YakitInput
                className={styles["yakit-combination-search-circle-input"]}
                wrapperClassName={styles["yakit-combination-search-circle-input-wrapper"]}
                bordered={false}
                placeholder='请输入关键词搜索插件'
            />
            <div className={classNames(styles["yakit-combination-search-circle-icon"])}>
                <OutlineSearchIcon />
            </div>
        </div>
    )
})
