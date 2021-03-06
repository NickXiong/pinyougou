package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

/**
 * 品牌服务层接口
 */
public interface BrandService {
    /**
     * 查询所有品牌
     * @return
     */
    public List<TbBrand> findAll();

    /**
     * 分页查询
     * @param pageNum
     * @param pageSize
     * @return
     */
    public PageResult findPage(int pageNum, int pageSize);

    public void save(TbBrand brand);

    public TbBrand findOne(Long id);

    public void update(TbBrand brand);

    public void delele(Long[] ids);

    public PageResult findPage(TbBrand brand, int pageNum, int pageSize);

    public List<Map> selectBrandList();
}
