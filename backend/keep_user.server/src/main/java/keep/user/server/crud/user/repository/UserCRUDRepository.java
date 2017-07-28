package keep.user.server.crud.user.repository;

import org.springframework.stereotype.Repository;

import keep.user.server.crud.base.repository.AbstractCRUDRepository;
import keep.user.server.model.user.UserEntity;

/**
 * Respositório de {@link UserFunctionEntity}.
 *
 * @author Guilherme Dalmarco (dalmarco.gd@gmail.com)
 */
@Repository
public class UserCRUDRepository extends AbstractCRUDRepository<UserEntity> {
}