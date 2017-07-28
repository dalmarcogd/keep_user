package keep.user.server.crud.userfunction.repository;

import org.springframework.stereotype.Repository;

import keep.user.server.crud.base.repository.AbstractCRUDRepository;
import keep.user.server.model.usercity.UserCityEntity;

/**
 * Respositório de {@link UserCityEntity}.
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@Repository
public class UserCityCRUDRepository extends AbstractCRUDRepository<UserCityEntity> {
}