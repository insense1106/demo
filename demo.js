
current 当前节点   successor 后继节点   parent 附近节点 root 根节点
删除有2个子节点的 节点current
 如果current 是root节点
  直接把root替换为后继节点
    如果不是根节点
        判断current 是parent的左节点吗
            如果是 左节点  
                parent.left=successor
                    如果是右节点
                        parent.right=successor

找后继node的方法
    current 要删除的节点 
         保存删除节点 
            let successor = current 
            保存 current的右子节点
            let  dog = current.right 
                找到current的 右子树的 最小叶节点
                    while(current!=null){
                        successor=current
                        current=current.left
                    }
 
删除节点 的右节点 是否是后继节点
        如果是  
            current=current.right
        如果不是
            successorParent.left = successor.right
            successor.right = current.right
              